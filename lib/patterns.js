const headings = {
  all: /^\#+\s.*/,
  type: /#/g,
};

const paragraphs = {};

const patterns = {
  lines: /([\r\n$]|<br>)+/,
  paragraph: /(^[^#>]).*(\s{2}|\.|\<br>)$/,
  headings: headings,
};

module.exports = patterns;
