const { parser } = require("./lib/parser");
const { wrappers } = require("./lib/builder/wrappaterns");

let parsedDoc = parser("./test.md", "utf8");

const newDoc = [];

for (const segment of parsedDoc) {
  const compound = segment.hasOwnProperty("subElements");
  const { type, content, subElements } = segment;

  if (compound) {
    const result = subElements.reduce(reducerfunction, []);

    console.log("Compound"); // assign to newElement
  } else {
    newElement = wrappers[segment.type](segment.content); // assign to newElement
  }
  newDoc.push(newElement);
}

// start
// 1 shift the first element
// 2 add content to array,
// 3 if the new first element is the same goto 1
// 3.1 if not the same, push new array to newSubelements as obj with category
// goto 1

const result = activities.reduce((r, o) => {
  const last = r[r.length - 1];
  
  if(last && last.type === o.type) last.duration += o.duration;
  else r.push({ ...o });
  
  return r;
}, []);
