const { categories } = require("./patterns");

class Element {
  constructor(rawText) {
    this.rawText = rawText;
    this.broadCategory = this.outerClassification();
    // swap out formatting elements
  }

  outerClassification() {
    let category;
    for (let key in categories) {
      if (!!this.rawText.match(categories[key])) {
        category = key;
      }
    }
    return category || null;
  }

  // replace formatting elements
}

module.exports = Element;
