const { parser } = require("./lib/parser");
const { wrappers } = require("./lib/builder/wrappaterns");

let parsedDoc = parser("./test.md", "utf8");

const newDoc = [];

for (const segment of parsedDoc) {
  const compound = segment.hasOwnProperty("subElements");
  const { type, content } = segment;

  let newElement;

  if (compound) {
    console.log("Compound", segment.subElements); // assign to newElement
  } else {
    newElement = wrappers[segment.type](segment.content); // assign to newElement
  }
  newDoc.push(newElement);
}
