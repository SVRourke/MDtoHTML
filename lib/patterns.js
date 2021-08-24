const headings = {
  headingType: /#/g,
};

// fix block quote to recognize empty
const categories = {
  heading: /^(\#{1,6})/,
  "block quote": /(^>)/,
  paragraph: /(^[^#>]).*(\s{2}|\.|\<br>)/,
  "unordered list item": /^-[\s\b]/,
  "ordered list item": /^(\d{1,5}\.)\s/,
};

const formatElements = {
  bold: /\*{2}.+\*{2}/g,
  italic: /\_.+\_/g,
};

const subElements = {
  quoteNestedUl: /^>\s-\s/g,
  quoteNestedOl: /^>\s\d{1,5}\.\s/g,
  quoteNestedQuote: /^>\s>\s\w*/g,
};

module.exports = {
  categories,
  subElements,
  formatElements,
};

// REMOVE DOUBLESPACE ENDINGS \s{2,}$