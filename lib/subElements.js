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
    console.log("quote nested quote REPLACEMENTS");
  },
};

module.exports = {
  replacements,
};
