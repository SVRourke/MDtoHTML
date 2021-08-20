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
  boldItalic: /(\*{2}\_|\_\*{2})/g,
  nestedQuote: /^(\>\s)|(\>{2})/,
  // quoteNestedOl: ,
  // quoteNestedUl: /.*/,
};

module.exports = {
  categories,
  subElements,
};

// add patterns for nested versions
