const stripEmpty = (arr) => {
  return arr.filter((i) => {
    return i && !i.includes("\n") && !i.includes("<br>");
  });
};



module.exports = {
  stripEmpty,
};
