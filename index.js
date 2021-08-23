const fs = require("fs");

const FILE_PATH = "./test.md";
const { categories, subElements } = require("./lib/patterns");
const { stripEmpty, replaceSubElements } = require("./lib/formatting");

fs.readFile(FILE_PATH, "utf8", (err, data) => {
  if (err) console.log;

  // split file into lines, remove empties
  const splitLines = stripEmpty(data.split(/([\r\n$]|<br>)+/));
  const broadCategorized = [];

  // broadly categorize the lines
  while (splitLines.length > 0) {
    const element = splitLines.shift();
    broadCategorized.push({
      category: classifyElement(element),
      element: element,
    });
  }

  // check for nested elements

  // identify format elements
  broadCategorized.forEach((e) => {
    let { category, element } = e;
    const formatElements = checkSubElements(element);
    if (!!formatElements) {
      formatElements.forEach((e) => {
        element = replacements[e](element);
      });
    }
  });
});

// ---------------------  REPLACEMENT OPS ------------------------
const replacements = {
  bold: (e) => {
    return e.replace(/\*{2}[\w\s]+\*{2}/g, (a, b, c, d) => {
      return `<strong>${a.replace(/\*{2}/g, "")}</strong>`;
    });
  },

  italic: (e) => {
    return = e.replace(/\_[\w\s]+\_/g, (a, b, c, d) => {
      return `<em>${a.replace(/\_/g, "")}</em>`;
    });
  },

  quoteNestedUl: (e) => {
    console.log("quote nested ul REPLACEMENTS");
  },
  quoteNestedOl: (e) => {
    console.log("quote nested ol REPLACEMENTS");
  },
  quoteNestedQuote: (e) => {
    console.log("quote nested quote REPLACEMENTS");
  },
};

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const checkSubElements = (line) => {
  const subs = [];
  for (let key in subElements) {
    if (!!line.match(subElements[key])) {
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
