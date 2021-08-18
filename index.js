const fs = require("fs");

const FILE_PATH = "./test.md";
const patterns = require("./lib/patterns");

fs.readFile(FILE_PATH, "utf8", (err, data) => {
  if (err) console.log;

  // split file into lines
  const rawLines = data.split(patterns.lines);
  const splitLines = rawLines.filter((line) => {
    return line && line !== "\n" && line !== "<br>";
  });

  let paragraphCount = 0;

  splitLines.forEach((line) => {
    console.log("LINE++", line, "\n");
  });
});

const checkHeading = (line) => {
  const validHeading = !!line.match(patterns.headings.all);

  if (validHeading) {
    const type = line.match(patterns.headings.type).length;

    return {
      type: `h${type}`,
      content: line.slice(type + 1),
    };
  } else {
    return false;
  }
};
