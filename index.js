const fs = require("fs");

const FILE_PATH = "./test.md";
const { categories, formatElements, subElements } = require("./lib/patterns");
const { stripEmpty } = require("./lib/formatting");
const { replacements } = require("./lib/subElements");
const Element = require("./lib/element");

fs.readFile(FILE_PATH, "utf8", (err, data) => {
  if (err) console.log;

  // split file into lines, remove empties
  const splitLines = stripEmpty(data.split(/([\r\n$]|<br>)+/));

  const instances = [];
  splitLines.forEach((e) => {
    instances.push(new Element(e));
  });

  instances.forEach((i) => {
    console.log(i);
  });
});

// check for sub elements
// create document
// add elements
// save
