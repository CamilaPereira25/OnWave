const express = require("express");
const router = express.Router();
const Campeonato = require("../models/campeonato");

router.get("/", async (req, res) => {
  const campeonatos = await Campeonato.find();
  res.json(campeonatos);
});

router.post("/", async (req, res) => {
  try {
    const novo = new Campeonato(req.body);
    await novo.save();
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao salvar campeonato" });
  }
});

router.put("/:id", async (req, res) => {
  await Campeonato.findByIdAndUpdate(req.params.id, req.body);
  res.sendStatus(200);
});

router.delete("/:id", async (req, res) => {
  await Campeonato.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
