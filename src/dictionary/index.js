const storage = require("./storage");

function dictionary(data, lang) {
  const source = storage.get()[lang] || [];

  const expressionsFound = source.filter(({ expression }) => {
    // TO DO - improve matching logic
    return data.toUpperCase().includes(expression.toUpperCase());
  });

  return expressionsFound;
}

module.exports = dictionary;
