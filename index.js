const fs = require("fs");

const FILE_PATH = "./test.md";
const { categories, subElements } = require("./lib/patterns");
const { stripEmpty } = require("./lib/formatting");

fs.readFile(FILE_PATH, "utf8", (err, data) => {
  if (err) console.log;

  // split file into lines, remove empties
  const splitLines = stripEmpty(data.split(/([\r\n$]|<br>)+/));
  const broadCategorized = [];

  // Broad Categorize
  while (splitLines.length > 0) {
    const element = splitLines.shift();
    broadCategorized.push({
      category: classifyElement(element),
      element: element,
    });
  }

  // identify sub elements
  broadCategorized.forEach((e) => {
    const { category, element } = e;

    if (category === "paragraph") {
      checkSubElements(element);
      // console.log(element.match(subElements.bold));
    }
  });

  console.log(splitLines.length, broadCategorized.length);
});

const classifyElement = (line) => {
  let category;
  for (let key in categories) {
    if (!!line.match(categories[key])) {
      category = key;
      console.log(key);
    }
  }
  return category || "invalid element";
};

const checkSubElements = (line) => {
  for (let key in subElements) {
    if (!!line.match(subElements[key])) {
      console.log("Found a:", key);
    }
  }
};

// split
// categorize
// check for sub elements
// format & push to receptacle
// combine necessary elements
// create document
// add elements
// save
