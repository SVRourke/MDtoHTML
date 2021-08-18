const headings = {
  headingType: /#/g,
};

const categories = {
  heading: /^\#+\s.*/,
  "block quote": /(^>)/,
  paragraph: /(^[^#>]).*(\s{2}|\.|\<br>)/,
  //   paragraph: /(^[^#>]).*(\s{2}|\.|\<br>)$/g,
};

module.exports = categories;

// add patterns for nested versions
