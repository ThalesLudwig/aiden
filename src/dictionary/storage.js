const CONFIG = require("../../config");
const moduleExists = require("../helpers/moduleExists");

const storage = [];

const get = () => storage;

const initialize = () => {
  CONFIG.MODULES.forEach((module) => {
    CONFIG.LANGUAGUES.forEach((language) => {
      if (!storage[language]) storage[language] = [];
      const path = `../modules/${module}/${language}.js`;
      if (moduleExists(path)) {
        const expressions = require(path);
        expressions.forEach((exp) => add(language, exp, module));
      }
    });
  });
};

const add = (lang, expression, module) => {
  if (!expression || !module) return false;
  storage[lang].push({
    expression,
    module,
  });
  return true;
};

module.exports = {
  get,
  initialize,
  add,
};
