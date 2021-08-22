const headings = {
  headingType: /#/g,
};

const categories = {
  heading: /\#{1,6}[\s\b]/,
  "block quote": /(^>)/,
  paragraph: /(^[^#>]).*(\s{2}|\.|\<br>)/,
};

const subElements = {
  bold: /(?:[\w\s])\*{2}(?=[\w\s])/g,
  italic: /[^_\*]\_[^_\*]/g,
  boldItalic: /(\*{2}\_|\_\*{2})/g,
  quoteNestedUl: /^(\>\s\-\s)/g,
  // quoteNestedOl: /^(\>\s\-\s)/g,
  // nestedQuote: /^(\>\s)|(\>{2})/,
};

module.exports = {
  categories,
  subElements,
};

// add patterns for nested versions
