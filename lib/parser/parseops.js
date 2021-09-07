const { recognition, parse } = require("./patterns");

const parseOuter = (element) => {
  for (const key in recognition) {
    let match = element.match(recognition[key]);

    if (!!match) {
      return {
        type: key,
        content: element.replace(parse[key], ""),
      };
    }
  }
};

const categorize = (e) => {
  let category;

  for (const pattern in recognition) {
    if (e.match(recognition[pattern])) {
      category = pattern;
    }
  }
  return category !== "paragraph" ? category : null;
};

const formats = [
  (e) => {
    return e.replace(/\*{2}(.+?)\*{2}/g, "<strong>$1</strong>");
  },

  (e) => {
    return e.replace(/\_(.+?)\_/g, "<em>$1</em>");
  },
];

const replaceFormats = (element) => {
  for (const func of formats) {
    element.content = func(element.content);
  }
};

const mergeSimilar = (arr) => {
  return arr.reduce((acc, curr) => {
    const prev = acc[acc.length - 1];

    if (prev && prev.type === curr.type) {
      prev.content += `\n${curr.content}`;
    } else {
      acc.push({ ...curr });
    }
    return acc;
  }, []);
};

module.exports = {
  parseOuter,
  categorize,
  replaceFormats,
  mergeSimilar
};
