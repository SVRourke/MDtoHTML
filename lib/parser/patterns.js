const recognition = {
  h1: /^[#]\s/,
  h2: /^[#]{2}\s/,
  h3: /^[#]{3}\s/,
  h4: /^[#]{4}\s/,
  h5: /^[#]{5}\s/,
  h6: /^[#]{6}\s/,
  blockquote: /^[>]\s/gm,
  ul: /^[-]\s/gm,
  ol: /^[\d]{1,3}\.\s/gm,
  paragraph: /^(?!(\d{1,3}\.|>|#|-)).*/gm,
  // todo: img
  // todo: code
  // todo: hr
  // todo: link
};

const parse = {
  h1: /#\s/,
  h2: /#{2}\s/,
  h3: /#{3}\s/,
  h4: /#{4}\s/,
  h5: /#{5}\s/,
  h6: /#{6}\s/,
  blockquote: /^[>]\s/gm,
  ul: /^[-]\s/gm,
  ol: /^[\d]{1,3}\.\s/gm,
  paragraph: /(\s{2}|\n)/g,
  // todo: img
  // todo: code
  // todo: hr
  // todo: link
};

module.exports = {
  recognition,
  parse,
};
