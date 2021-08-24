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
    console.log(i, i.broadCategory);
  });
  // broadly categorize
  // const broad = splitLines.map((line) => {
  //   return {
  //     category: classifyElement(line),
  //     element: line,
  //   };
  // });

  // sub out format elements
  // const subbed = subformatting(broad);

  // continue doing stuff
  // subbed.forEach((e) => console.log(e));
});

// UTILS BELOW

const subformatting = (arr) => {
  const subbed = [];
  arr.forEach((line) => {
    let { category, element } = line;
    const formats = checkSubElements(element);

    if (!!formats) {
      formats.forEach((e) => {
        element = replacements[e](element);
      });
    }

    subbed.push({
      category: category,
      element: element,
    });
  });
  return subbed;
};

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const checkSubElements = (line) => {
  const subs = [];
  for (let key in formatElements) {
    if (!!line.match(formatElements[key])) {
      subs.push(key);
    }
  }
  return subs.some((e) => e) ? subs : null;
};

const classifyElement = (line) => {
  let category;
  for (let key in categories) {
    if (!!line.match(categories[key])) {
      category = key;
    }
  }
  return category || null;
};

// check for sub elements
// format & push to receptacle
// combine necessary elements
// create document
// add elements
// save
