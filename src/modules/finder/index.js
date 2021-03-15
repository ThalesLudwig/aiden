const RESPONSES = require("./src/responses");
const CONTEXT = require("./src/context");

const getRandomIndexFor = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const Finder = ({ lang, context }) => {
  const grammar = RESPONSES[lang];
  const contextResponses = CONTEXT[lang];
  const contextFirstAttempt = context[context.length - 2];
  const contextSecondAttempt = context[context.length - 3];

  if (
    !!contextFirstAttempt &&
    contextFirstAttempt.intention.length === 0 &&
    !!contextSecondAttempt &&
    contextSecondAttempt.intention.length === 0
  ) {
    return getRandomIndexFor(contextResponses.ATTEMPT_2);
  } else if (
    !!contextFirstAttempt &&
    contextFirstAttempt.intention.length === 0
  ) {
    return getRandomIndexFor(contextResponses.ATTEMPT_1);
  }

  return getRandomIndexFor(grammar);
};

module.exports = Finder;
