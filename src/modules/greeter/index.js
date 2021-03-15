const EXPRESSIONS = require("./src/expressions");
const RESPONSES = require("./src/responses");

const Greeter = ({ expression, lang }) => {
  const grammar = EXPRESSIONS[lang];
  return RESPONSES[lang][grammar[expression]];
};

module.exports = Greeter;
