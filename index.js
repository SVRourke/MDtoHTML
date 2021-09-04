const fs = require("fs");
const { recognition, parse, parseOuter } = require("./lib/patterns.js");

const FILE_PATH = "./test.md";

const matchEl = (text, obj) => {
  return !!text.match(obj["recog"]);
};

fs.readFile(FILE_PATH, "utf8", (err, data) => {
  if (err) console.log;

  data = data.split(/(\n{2}|\s{2})/gm);
  data = data.filter((e) => !e.match(/(\n{2}|\s{2})/));

  // const parsed = [];

  data.slice(0).forEach((e) => {
    const parsed = parseOuter(e);
    replaceFormats(parsed);

    // Parse sub elements
    const splitContent = parsed.content.split(/\n/gm);
    const present = splitContent.some((c) => categorize(c));

    if (present) {
      parsed.subElements = splitContent.map((c) => ({
        category: categorize(c),
        content: c,
      }));
    }

    console.log(parsed);
    console.log("\n");
  });
});

const categorize = (e) => {
  let category;

  for (const pattern in recognition) {
    if (e.match(recognition[pattern])) {
      category = pattern;
    }
  }
  return category !== "paragraph" ? category : null;
};

const replaceFormats = (element) => {
  for (const func of formats) {
    element.content = func(element.content);
  }
};

const formats = [
  (e) => {
    return e.replace(/\*{2}(.+?)\*{2}/g, "<strong>$1</strong>");
  },

  (e) => {
    return e.replace(/\_(.+?)\_/g, "<em>$1</em>");
  },
];
