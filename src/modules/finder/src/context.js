const LANG_CONSTANTS = require("../../../constants/lang");

/*
 * Generates additional contextual responses
 */

const PT_BR = {
  ATTEMPT_1: [
    "Estranho, não entendi essa também. :/",
    "Desculpe de novo, mas não entendi.",
    "Acho que estou com algum bug hoje, mas continuo não entendendo."
  ],
  ATTEMPT_2: [
    "Isso está ficando constragendor, mas realmente não estou entendendo.",
    "Está fazendo de propósito? Porque eu não entendi de novo.",
    "Olha... Hoje está complicado. Não estou te entendendo. :(",
  ],
};

const EN_US = {
  ATTEMPT_1: [
    "Weird, I didn't get that either. :/",
    "Sorry again, but I can't understand that.",
    "I think I have a bug today, because I still don't understand you."
  ],
  ATTEMPT_2: [
    "This is getting embarrassing, but I REALLY can't understand you.",
    "Are you doing this on purpose? Because I didn't get it again.",
    "Look... Today is a bad day. I can't understand you. :(",
  ],
};

const LANG = {
  [LANG_CONSTANTS.PT_BR]: PT_BR,
  [LANG_CONSTANTS.EN_US]: EN_US,
};

module.exports = LANG;
