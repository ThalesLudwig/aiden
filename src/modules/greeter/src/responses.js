const LANG_CONSTANTS = require("../../../constants/lang");

const PT_BR = {
  THANK_POLITENESS: "Obrigado por ser educado!",
  GREET_SHORT: "Oi!",
  GREET_LONG: "Olá, como vai?",
  THANK_GENERIC: "De nada!",
};

const EN_US = {
  THANK_POLITENESS: "Thank you for being polite!",
  GREET_SHORT: "Hi there!",
  GREET_LONG: "Hello, how are you?",
  THANK_GENERIC: "You're welcome!",
};

const LANG = {
  [LANG_CONSTANTS.PT_BR]: PT_BR,
  [LANG_CONSTANTS.EN_US]: EN_US,
};

module.exports = LANG;
