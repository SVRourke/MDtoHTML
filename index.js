const fs = require("fs");

const FILE_PATH = "./test.md";
const { categories, subElements } = require("./lib/patterns");
const { stripEmpty, replaceSubElements } = require("./lib/formatting");

fs.readFile(FILE_PATH, "utf8", (err, data) => {
  if (err) console.log;

  // split file into lines, remove empties
  const splitLines = stripEmpty(data.split(/([\r\n$]|<br>)+/));
  
  // broadly categorize
  const broad = splitLines.map((line) => {
    return {
      category: classifyElement(line),
      element: line,
    };
  });

  // sub out format elements
  const subbed = subformatting(broad);

  // continue doing stuff
  subbed.forEach((e) => console.log(e));
});

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

// ---------------------  REPLACEMENT OPS ------------------------
// accepts the text, outer and inner regex patterns and
// the wrapper text in the format "<br>|</br>"
const wrapElement = (line, outerPattern, innerPattern, wrapper) => {
  const splitWrap = wrapper.split("|");
  return line.replace(outerPattern, (a) => {
    return `${splitWrap[0]}${a.replace(innerPattern, "")}${splitWrap[1]}`;
  });
};

const replacements = {
  bold: (e) => {
    return wrapElement(e, /\*{2}.+\*{2}/g, /\*{2}/g, "<strong>|</strong>");
  },

  italic: (e) => {
    return wrapElement(e, /\_.+\_/g, /\_/g, "<em>|</em>");
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
