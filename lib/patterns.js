const headings = {
    all: /^\#+\s.*/,
    //   heading 1
    //   heading 2
    //   heading 3
    //   heading 4
    //   heading 5
    //   heading 6
}


const patterns = {
  lines: /[\r\n$]+/,
  headings: headings
};

module.exports = patterns;
