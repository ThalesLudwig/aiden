const LANG_CONSTANTS = require("../../../constants/lang");

const PT_BR = [
  "Não entendi. Pode reformular a frase?",
  "Acho que ainda não sou capaz de responder isso.",
  "Lamento, minhas respostas são limitadas. Tente fazer as perguntas certas. ;)",
  "Desculpe, não consigo responder isso.",
];

const EN_US = [
  "I don't get it. Can you rephrase that?",
  "I think I'm not able to answer that yet.",
  "I'm sorry. My responses are limited. You must ask the right questions. ;)",
  "Sorry, I can't answer that.",
];

const LANG = {
  [LANG_CONSTANTS.PT_BR]: PT_BR,
  [LANG_CONSTANTS.EN_US]: EN_US,
};

module.exports = LANG;
