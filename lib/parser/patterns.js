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
};

module.exports = {
  recognition,
  parse,
};
