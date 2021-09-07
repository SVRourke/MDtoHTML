const wrappers = {
  h1: (e) => `<h1>${e}</h1>`,
  h2: (e) => `<h2>${e}</h2>`,
  h3: (e) => `<h3>${e}</h3>`,
  h4: (e) => `<h4>${e}</h4>`,
  h5: (e) => `<h5>${e}</h5>`,
  h6: (e) => `<h6>${e}</h6>`,
  blockquote: (e) => `<blockquote>${e}</blockquote>`,
  ul: (e) => `<ul>${listItems(e)}</ul>`,
  ol: (e) => `<ol>${listItems(e)}</ol>`,
  paragraph: (e) => `<p>${e}</p>`,
};

const listItems = (e) => {
  const separate = e.split(/\n/gm);
  const lis = separate.map((li) => `<li>${li}</li>`);
  return lis.join("");
};

module.exports = {
  wrappers,
};
