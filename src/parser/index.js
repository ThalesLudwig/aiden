const LANG = require("../constants/lang");
const dictionary = require("../dictionary");

function parser(input) {
  let data = "";
  let lang = LANG.EN_US;
  if (!!input && !!input.data) {
    data = input.data;
    lang = input.lang;
  }

  const splittedData = data.split(" ");
  const intention = dictionary(splittedData, lang);
  const content = {
    intention,
    input: data,
    lang,
  };
  return content;
}

module.exports = parser;
