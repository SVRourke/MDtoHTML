const { parser } = require("./lib/parser");
const { wrappers } = require("./lib/builder/wrappaterns");

let parsedDoc = parser("./test.md", "utf8");

const newDoc = [];

for (const segment of parsedDoc) {
  const compound = segment.hasOwnProperty("subElements");
  const { type, content, subElements } = segment;

  if (compound) {
    const result = subElements.reduce((accumulator, current) => {
      const lastAdded = accumulator[accumulator.length - 1];

      if (lastAdded && lastAdded.category === current.category)
        lastAdded.content += `\n${current.content}`;
      else accumulator.push({ ...current });
      return accumulator;
    }, []);
    console.log("Compound", result); // assign to newElement
  } else {
    newElement = wrappers[segment.type](segment.content); // assign to newElement
  }
  newDoc.push(newElement);
}
newDoc.forEach((e) => {
  console.log(e);
});
