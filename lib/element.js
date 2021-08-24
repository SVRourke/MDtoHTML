const { categories, formatElements } = require("./patterns");
const { replacements } = require("./subElements");
class Element {
  constructor(content) {
    this.content = content;
    this.broadCategory = this.outerClassification();
    this.pruneFormats();
    // swap out formatting elements
  }

  outerClassification() {
    let category;
    for (let key in categories) {
      if (!!this.content.match(categories[key])) {
        category = key;
      }
    }
    return category || null;
  }

  // replace formatting elements
  pruneFormats() {
    const formats = this.checkSubElements(this.content);

    if (!!formats) {
      formats.forEach((e) => {
        this.content = replacements[e](this.content);
      });
    }
  }

  checkSubElements() {
    const subs = [];
    for (let key in formatElements) {
      if (!!this.content.match(formatElements[key])) {
        subs.push(key);
      }
    }
    return subs.some((e) => e) ? subs : null;
  }
}

module.exports = Element;
