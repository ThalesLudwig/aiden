const express = require("express");
const orchestrator = require("../src/orchestrator");
const router = express.Router();

router.post("/", function (req, res, next) {
  const content = orchestrator(req.body);
  res.send(content);
});

module.exports = router;
