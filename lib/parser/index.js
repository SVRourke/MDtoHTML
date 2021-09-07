const fs = require("fs");
const {
  parseOuter,
  categorize,
  replaceFormats,
  mergeSimilar,
} = require("./parseops.js");
const { parse } = require("./patterns.js");
const FILE_PATH = "../../test.md";

const parser = (filePath, format) => {
  try {
    data = fs.readFileSync(filePath, format);
    data = data.split(/(\n{2}|\s{2})/gm);
    data = data.filter((e) => !e.match(/(\n{2}|\s{2})/));

    data = data.map((e) => {
      // first level, outer categorization
      const parsed = parseOuter(e);
      // swap format syntax with html <em>&<strong>
      replaceFormats(parsed);

      // split the content by new lines
      const splitContent = parsed.content.split(/\n/gm);
      // boolean value for if any of the pieces contain elements
      const present = splitContent.some((c) => categorize(c));

      /**
       * if there are subelements detected, create a new
       * attribute and assign it the split content array
       * mapped to objects containing type and parsed
       * content attributes **/
      if (present) {
        parsed.subElements = mergeSimilar(
          splitContent.map((c) => ({
            type: categorize(c),
            content: c.replace(parse[categorize(c)], ""),
          }))
        );
      }
      /**
       * returning the finished object with appropriate
       * attributes
       */
      return parsed;
    });

    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  parser,
};
