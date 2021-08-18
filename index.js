const fs = require("fs");

const FILE_PATH = "./test.md";

const patterns = {
  lines: /[\r\n$]+/,
  anyHeading: /^\#+\s.*/,
};

fs.readFile(FILE_PATH, "utf8", (err, data) => {
  if (err) console.log;
  const splitLines = data.split(patterns.lines);

  splitLines.forEach((line) => {
    console.log(line.match(patterns.anyHeading));
  });

  console.log(splitLines.length);
});
