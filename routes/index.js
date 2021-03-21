const express = require("express");
const orchestrator = require("../src/orchestrator");
const router = express.Router();

router.post("/", function (req, res, next) {
  const content = orchestrator(req.body);
  res.send(content);
});

router.get("/", function (req, res, next) {
  res.send("Hello AIDEN!");
});

module.exports = router;
