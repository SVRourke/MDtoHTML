const { categories, formatElements } = require("./patterns");
const { replaceFormats } = require("./subElements");
class Element {
  constructor(content) {
    this.content = content;
    this.broadCategory = this.outerClassification();
    this.replaceSyntax();
    // this.pruneFormats();
    this.composible = this.checkComposability();
    // outer element
    // inner elements []
  }

  outerClassification() {
    let category = null;
    for (let key in categories) {
      if (!!this.content.match(categories[key])) {
        category = key;
      }
    }
    return category;
  }

  // replace formatting elements
  pruneFormats() {
    const formats = this.checkFormats(this.content);

    if (!!formats) {
      formats.forEach((e) => {
        this.content = replaceFormats[e](this.content);
      });
    }
  }

  replaceSyntax() {
    if (!!this.content.match(/^(-\s\b)/)) {
      this.content = replaceFormats[this.broadCategory](this.content);
      console.log("\n", this.broadCategory, this.content);
    }
    this.pruneFormats();
  }

  checkFormats() {
    const subs = [];
    for (let key in formatElements) {
      if (!!this.content.match(formatElements[key])) {
        subs.push(key);
      }
    }
    return subs.some((e) => e) ? subs : null;
  }

  checkComposability() {
    const composibles = [
      "ordered list item",
      "unordered list item",
      "block quote",
    ];
    return !!composibles.includes(this.broadCategory);
  }
}

module.exports = Element;

// format content so it is ready for composition eg li or p or w/e
// have broad categorization match sub elements like blockquote-ulItem
