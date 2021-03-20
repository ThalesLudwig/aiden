const storage = require("./storage");

function dictionary(data, lang) {
  const source = storage.get()[lang] || [];

  const expressionsFound = source.filter(
    ({ expression }) =>
      data.toUpperCase() === expression.toUpperCase() ||
      data.toUpperCase() === `${expression}s`.toUpperCase()
  );

  return expressionsFound;
}

module.exports = dictionary;
