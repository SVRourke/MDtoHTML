const fs = require("fs");

const FILE_PATH = "./test.md";
const { categories, formatElements, subElements } = require("./lib/patterns");
const { stripEmpty } = require("./lib/formatting");
const { replacements } = require("./lib/subElements");
const Element = require("./lib/element");

fs.readFile(FILE_PATH, "utf8", (err, data) => {
  if (err) console.log;

  // split file into lines, remove empties
  const splitLines = stripEmpty(data.split(/([\r\n$]|<br>)+/));

  console.log(data.split(/^\s*$/gm));

  // const instances = [];
  // splitLines.forEach((e) => {
  //   instances.push(new Element(e));
  // });

  // while (instances.length > 0) {
  //   const currentInstance = instances.shift();
  //   const parts = [currentInstance];
  //   let searching;

  //   if (!currentInstance.composible) {
  //     searching = false;
  //     console.log("NOT", currentInstance.broadCategory);
  //   } else {
  //     searching = true;
  //   }

  //   while (searching) {
  //     console.log(instances[0].composible);
  //     if (
  //       instances[0].composible &&
  //       currentInstance.broadCategory === instances[0].broadCategory
  //     ) {
  //       parts.push(instances.shift());
  //     } else searching = false;
  //   }
  //   console.log(parts);
  // }

  // instances.forEach((i, idx) => {
  //   if (i.composible) {
  //     for (let second = idx + 1; second < instances.length; second++) {
  //       if (instances[second].broadCategory === i.broadCategory) {
  //       }
  //     }
  //   }
  //   console.log(i, a);
  // });
});

// check for sub elements
// create document
// add elements
// save
