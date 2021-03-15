const parser = require("../parser");
const context = require("../context");
const dealer = require("../dealer");
const Finder = require("../modules/finder");
const LANG_CONSTANTS = require("../constants/lang");

const orchestrator = (input) => {
  const content = parser(input);
  context.add(content);

  if (content.intention.length === 0) {
    const nothingFound = Finder({
      context: context.get(),
      lang: input.lang || LANG_CONSTANTS.EN_US,
    });
    return nothingFound;
  }
  const response = dealer(content, context.get());
  return response;
};

module.exports = orchestrator;
