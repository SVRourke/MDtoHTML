const headings = {
  headingType: /#/g,
};

const categories = {
  heading: /\#{1,6}[\h\b]/,
  "block quote": /(^>)[\w\b\s]/,
  paragraph: /(^[^#>]).*(\s{2}|\.|\<br>)/,
};

const subElements = {
  bold: /(?<!_)\*{2}(?!_)/g,
  italic: /(?<!\*)(?<=\s)_[a-z\s]*_(?!\*)/g,
  boldItalic: /\*{2}_.*_\*{2}/g,
  quoteNestedUl: /^>\s-\s/g,
  quoteNestedOl: /^>\s\d{1,5}\.\s/g,
  quoteNestedQuote: /^>\s>\s\w*/g,
};

module.exports = {
  categories,
  subElements,
};

// add patterns for nested versions
