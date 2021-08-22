const stripEmpty = (arr) => {
  return arr.filter((i) => {
    return i && !i.includes("\n") && !i.includes("<br>");
  });
};

const replaceSubElements = {
  bold: function (line) {
    console.log(line);
    //check front
    //check back
    // if both
    // replace front
    // replace back
    //else return "malformed markdown" error
  },
};

module.exports = {
  stripEmpty,
  replaceSubElements,
};
