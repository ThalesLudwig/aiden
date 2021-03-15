const RESPONSES = require("./src/responses");

const Finder = ({ lang }) => {
  const grammar = RESPONSES[lang];

  const randomIndex = Math.floor(Math.random() * grammar.length);
  return grammar[randomIndex];
};

module.exports = Finder;
