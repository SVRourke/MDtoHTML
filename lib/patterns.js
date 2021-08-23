const headings = {
  headingType: /#/g,
};
// fix block quote to recognize empty
const categories = {
  heading: /\#{1,6}[\h\b]/,
  // "block quote": /(^>)[\w\b\s]/,
  "block quote": /(^>)/,
  paragraph: /(^[^#>]).*(\s{2}|\.|\<br>)/,
};

// maybe remove bolditalic and make bold and italic more open allowing each other
// bold: /(?<!_)\*{2}(?!_)/g,
// italic: /(?<!\*)(?<=\s)_[a-z\s]*_(?!\*)/g,
// boldItalic: /\*{2}_.*_\*{2}/g,
const subElements = {
  bold: /\*{2}.+\*{2}/g,
  italic: /\_.+\_/g,
  quoteNestedUl: /^>\s-\s/g,
  quoteNestedOl: /^>\s\d{1,5}\.\s/g,
  quoteNestedQuote: /^>\s>\s\w*/g,
};

module.exports = {
  categories,
  subElements,
};

// add patterns for nested versions
