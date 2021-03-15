const storage = require("./storage");

function dictionary(data, lang) {
  if (!Array.isArray(data)) {
    return null;
  }
  const source = storage.get()[lang] || [];

  const wordsFound = [];
  data.forEach((input, index) => {
    source.forEach(({ expression, module }) => {
      if (input.toUpperCase().includes(expression.toUpperCase())) {
        wordsFound.push({
          original: input,
          found: expression,
          module,
          index,
        });
      }
    });
  });

  return wordsFound;
}

module.exports = dictionary;
