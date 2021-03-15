const parser = require("../parser");
const persistToContext = require("../context");
const dealer = require("../dealer");
const Finder = require("../modules/finder");
const LANG_CONSTANTS = require("../constants/lang");

const orchestrator = (input) => {
  const content = parser(input);
  if (content.intention.length === 0) {
    const nothingFound = Finder({ lang: input.lang || LANG_CONSTANTS.EN_US });
    return nothingFound;
  }
  const context = persistToContext(content);
  const response = dealer(content, context);
  return response;
};

module.exports = orchestrator;
