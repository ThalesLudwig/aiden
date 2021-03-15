const parser = require("../parser");
const persistToContext = require("../context");
const dealer = require("../dealer");

const orchestrator = (input) => {
    const content = parser(input);
    if (content.intention.length === 0) {
        return "Nada encontrado"; // TO_DO
    }
    persistToContext(content);
    const response = dealer(content);
    return response;
};

module.exports = orchestrator;