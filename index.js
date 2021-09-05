const { parser } = require("./lib/parser");
const { wrappers } = require("./lib/builder/wrappaterns");

let parsedDoc = parser("./test.md", "utf8");

const newDoc = [];

for (const segment of parsedDoc) {
  const compound = segment.hasOwnProperty("subElements");
  const { type, content, subElements } = segment;

  let newElement;

  if (compound) {
    for (const index in subElements) {
      const { category, content } = subElements[index];

      while (subElements.length > 1) {
        const currentElement = subElements.shift();
        const contents = [currentElement];
        console.log(subElements.length);

        if (currentElement.category === subElements[0]["category"]) {
          console.log("match");
        }
      }

      // FOR EACH SUB ELEMENT
      // ADD CURRENT TO ACCRUED CONTENT ARRAY
      // IF THE CURRENT ELEMENT MATCHES THE NEXT ELEMENT
      // PUSH NEXT
      // CONTINUE
      // ELSE
      // PROCESS AS INDIVIDUAL

      // while (searching) {
      //   const second = index + 1;
      //   if (index > subElements.length) {
      //     break;
      //   }

      //   if (category == subElements[second]["category"]) {
      //     console.log("match");
      //     second++;
      //   } else break;
      // }
    }
    console.log("Compound", segment.subElements); // assign to newElement
  } else {
    newElement = wrappers[segment.type](segment.content); // assign to newElement
  }
  newDoc.push(newElement);
}
