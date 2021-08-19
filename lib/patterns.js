const headings = {
  headingType: /#/g,
};

const categories = {
  heading: /^\#+\s.*/,
  "block quote": /(^>)/,
  paragraph: /(^[^#>]).*(\s{2}|\.|\<br>)/,
};

const subElements = {};

module.exports = {
  categories,
  subElements,
};

// add patterns for nested versions
