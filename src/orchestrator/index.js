const parser = require("../parser");
// import parser from "../parser";

const orchestrator = (input) => {
    return parser(input);
};

module.exports = orchestrator;