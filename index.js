const fs = require("fs");

const FILE_PATH = "./test.md";
const patterns = require("./lib/patterns");

fs.readFile(FILE_PATH, "utf8", (err, data) => {
  if (err) console.log;
  const splitLines = data.split(patterns.lines);

  splitLines.forEach((line) => {
    console.log(!!line.match(patterns.headings.all));
  });

  console.log(splitLines.length);
});
