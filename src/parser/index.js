const LANG = require("../constants/lang");
const dictionary = require("../dictionary");

function normalizeDiacritics(input) {
  if (!input) return "";
  return input.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

function parser(input) {
  const data = !!input && !!input.data ? input.data.trim() : "";
  const lang = !!input && !!input.lang ? input.lang : LANG.EN_US;

  const intentions = dictionary(normalizeDiacritics(data), lang); // links the user expression to a module

  const content = { intentions, input: data, lang };
  return content;
}

module.exports = parser;
