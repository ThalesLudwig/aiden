const parser = require("../parser");
const persistToContext = require("../context");
const dealer = require("../dealer");
const Finder = require("../modules/finder");

const orchestrator = (input) => {
  const content = parser(input);
  if (content.intention.length === 0) {
    const nothingFound = Finder({ lang: input.lang });
    return nothingFound;
  }
  persistToContext(content);
  const response = dealer(content);
  return response;
};

module.exports = orchestrator;
