const parser = require("../parser");
const context = require("../context");
const dealer = require("../dealer");
const Finder = require("../modules/finder");
const LANG_CONSTANTS = require("../constants/lang");

const orchestrator = (input) => {
  const content = parser(input); // verify what modules match with the user expression
  context.add(content);

  if (content.intentions.length === 0) {
    // if nothing matched, Finder will return some default messages
    const nothingFound = Finder({
      context: context.get(),
      lang: input.lang || LANG_CONSTANTS.EN_US,
    });
    return nothingFound;
  }
  const response = dealer(content, context.get()); // Dealer will call the right Module
  return response;
};

module.exports = orchestrator;
