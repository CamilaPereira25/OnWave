const express = require("express");
const router = express.Router();
const Pergunta = require("../models/pergunta");

router.get("/:campeonato", async (req, res) => {
  const perguntas = await Pergunta.findOne({ campeonato_nome: req.params.campeonato });
  if (perguntas) res.json(perguntas);
  else res.status(404).json({ erro: "Campeonato não encontrado" });
});

module.exports = router;
