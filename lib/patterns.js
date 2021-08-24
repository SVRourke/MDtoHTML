const headings = {
  headingType: /#/g,
};

// fix block quote to recognize empty
const categories = {
  heading: /\#{1,6}[\h\b\w]/,
  "block quote": /(^>)/,
  paragraph: /(^[^#>]).*(\s{2}|\.|\<br>)/,
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
