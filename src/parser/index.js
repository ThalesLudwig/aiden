const LANG = require("../constants/lang");
const dictionary = require("../dictionary");

function parser(input) {
    if (!input || !input.data) return null;
    const { data, lang } = input;
    if (!lang) lang = LANG.EN_US;
    
    const intention = dictionary(data, lang);
    const content = {
        intention,
        context: data,
        lang,
    };
    return content;
};

module.exports = parser;