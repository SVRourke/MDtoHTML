const { parser } = require("./lib/parser");
const { wrappers } = require("./lib/builder/wrappaterns");

let parsedDoc = parser("./test.md", "utf8");

const newDoc = [];

const wrapSubElements = (element) => {
  element.content = element.subElements
    .map((e) => wrappers[e.type](e.content))
    .reduce((acc, curr) => (acc += curr));
};

const wrapElement = (element) => {
  const compound = element.hasOwnProperty("subElements");
  let { content, type } = element;
  if (compound) wrapSubElements(element);
  element.content = wrappers[type](content);
};

for (const element of parsedDoc) {
  const compound = element.hasOwnProperty("subElements");
  let { content, type } = element;

  if (compound) {
    element.content = element.subElements
      .map((e) => wrappers[e.type](e.content))
      .reduce((acc, curr) => (acc += curr));
  }

  element.content = wrappers[type](content);
}
parsedDoc.forEach((e) => {
  console.log(e);
});
