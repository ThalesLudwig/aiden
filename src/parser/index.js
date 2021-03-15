const LANG = require("../constants/lang");
const dictionary = require("../dictionary");

function parser(input) {
  const data = !!input && !!input.data ? input.data : "";
  const lang = !!input && !!input.lang ? input.lang : LANG.EN_US;

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
