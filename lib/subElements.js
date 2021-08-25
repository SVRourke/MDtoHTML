// ---------------------  REPLACEMENT OPS ------------------------
// accepts the text, outer and inner regex patterns and
// the wrapper text in the format "<br>|</br>"
const wrapElement = (line, outerPattern, innerPattern, wrapper) => {
  const splitWrap = wrapper.split("|");
  return line.replace(outerPattern, (a) => {
    return `${splitWrap[0]}${a.replace(innerPattern, "")}${splitWrap[1]}`;
  });
};

const replaceFormats = {
  bold: (e) => {
    return e.replace(/\*{2}(.+?)\*{2}/g, "<strong>$1</strong>");
  },

  italic: (e) => {
    return e.replace(/\_(.+?)\_/g, "<em>$1</em>");
  },

  quoteNestedUl: (e) => {
    return wrapElement(e, /\s-[\s\w]*/g, /\s-\s\b/g, "<li>|</li>");
  },
  quoteNestedOl: (e) => {
    return wrapElement(
      e,
      /\s\d{1,5}\.[\s\w]*/g,
      /\s\d{1,5}\.\s\b/g,
      "<li>|</li>"
    );
  },
  quoteNestedQuote: (e) => {
    console.log("quote nested quote replaceFormats");
  },
  "unordered list item": (e) => {
    return wrapElement(e, /^(-\s)[\d\w\s]+/, /^(-\s)/, "<li>|</li>");
  },
  heading: (e) => {
    console.log(e);
  },
  paragraph: (e) => {
    console.log(e);
  },
  "block quote": (e) => {
    console.log(e);
  },
  "ordered list item": (e) => {
    console.log(e);
  },
};

module.exports = {
  replaceFormats,
};
