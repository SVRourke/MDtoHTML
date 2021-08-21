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
    // console.log(classifyElement(element), element);
  }

  // identify sub elements
  broadCategorized.forEach((e) => {
    const { category, element } = e;

    if (category === "paragraph") {
      console.log(anySub(element));
      // checkSubElements(element);
    }
  });
  // console.log(broadCategorized[broadCategorized.length - 3]);

  // console.log();
});

const anySub = (line) => {
  let subEl;
  Object.entries(subElements).forEach((e) => {
    if (!!line.match(e[1])) {
      subEl = e[0];
    }
  });
  return subEl || null;
};

const checkSubElements = (line) => {
  for (let key in subElements) {
    console.log(line);
    if (!!line.element.match(subElements[key])) {
      console.log("Found a:", key);
    }
  }
};

const classifyElement = (line) => {
  let category;
  for (let key in categories) {
    if (!!line.match(categories[key])) {
      category = key;
    }
  }
  return category || "invalid element";
};

// split
// categorize
// check for sub elements
// format & push to receptacle
// combine necessary elements
// create document
// add elements
// save
