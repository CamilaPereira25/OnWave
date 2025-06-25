const express = require("express");
const router = express.Router();
const Interacao = require("../models/interacao");

router.post("/", async (req, res) => {
  const nova = new Interacao(req.body);
  await nova.save();
  res.status(201).json(nova);
});

module.exports = router;
