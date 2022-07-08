const RESPONSES = require("./src/responses");
const CONTEXT = require("./src/context");
const getRandomIndexFor = require("../../helpers/getRandomIndex");

const Finder = ({ lang, context }) => {
  const grammar = RESPONSES[lang];
  const contextResponses = CONTEXT[lang];
  const contextFirstAttempt = context[context.length - 2];
  const contextSecondAttempt = context[context.length - 3];

  if (contextFirstAttempt?.intentions.length === 0 && contextSecondAttempt?.intentions.length === 0) {
    return getRandomIndexFor(contextResponses.ATTEMPT_2);
  } else if (contextFirstAttempt?.intentions.length === 0) {
    return getRandomIndexFor(contextResponses.ATTEMPT_1);
  }

  return getRandomIndexFor(grammar);
};

module.exports = Finder;
