const fs = require("fs");

const FILE_PATH = "./test.md";
const categories = require("./lib/patterns");
const { stripEmpty } = require("./lib/formatting");

fs.readFile(FILE_PATH, "utf8", (err, data) => {
  if (err) console.log;

  // split file into lines, remove empties
  const splitLines = stripEmpty(data.split(/([\r\n$]|<br>)+/));
  const parsed = [];

  while (splitLines.length > 0) {
    const element = splitLines.shift();
    classifyElement(element);
  }
  console.log(splitLines.length, parsed.length);
});

const classifyElement = (line) => {
  let category;
  for (let key in categories) {
    if (!!line.match(categories[key])) {
      category = key;
    }
  }
  return category || "invalid element";
};
