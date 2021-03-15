const LANG_CONSTANTS = require("../../../constants/lang");
const OPERATIONS = require("./operations");
const PT_BR = require("../pt-BR");
const EN_US = require("../en-US");

const LANG_ENUM = {
  [LANG_CONSTANTS.PT_BR]: {
    [PT_BR[0]]: OPERATIONS.THANK_POLITENESS,
    [PT_BR[1]]: OPERATIONS.GREET_SHORT,
    [PT_BR[2]]: OPERATIONS.GREET_LONG,
    [PT_BR[3]]: OPERATIONS.GREET_LONG,
    [PT_BR[4]]: OPERATIONS.THANK_GENERIC,
  },
  [LANG_CONSTANTS.EN_US]: {
    [EN_US[0]]: OPERATIONS.THANK_POLITENESS,
    [EN_US[1]]: OPERATIONS.GREET_SHORT,
    [EN_US[2]]: OPERATIONS.GREET_LONG,
    [EN_US[3]]: OPERATIONS.THANK_GENERIC,
    [EN_US[4]]: OPERATIONS.THANK_GENERIC,
  },
};

module.exports = LANG_ENUM;
