const fs = require("fs");

const FILE_PATH = "./test.md";
const patterns = require("./lib/patterns");

fs.readFile(FILE_PATH, "utf8", (err, data) => {
  if (err) console.log;

  // split file into lines
  const splitLines = data.split(patterns.lines).filter((l) => l);

  let paragraphCount = 0;

  splitLines.forEach((line) => {
    // console.log(checkHeading(line), "\n");
    // console.log(line, "\n", , "\n\n");
    if (!!line.match(patterns.paragraph)) paragraphCount++;
    console.log("LINE++ ", line, "\n");
  });

  console.log(splitLines.length);
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
