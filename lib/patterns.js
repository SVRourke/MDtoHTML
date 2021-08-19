const headings = {
  headingType: /#/g,
};

const categories = {
  heading: /^\#+\s.*/,
  "block quote": /(^>)/,
  paragraph: /(^[^#>]).*(\s{2}|\.|\<br>)/,
};

const subElements = {
  bold: /[^_\*]\*{2}[^_\*]/g,
  italic: /[^_\*]\_[^_\*]/g,
  // boldItalic: /[^_\*]\_[^_\*]/g,
  // subQuote: /.*/,
  // nestedOl: /.*/,
  // nestedUl: /.*/,
};

module.exports = {
  categories,
  subElements,
};

// add patterns for nested versions
