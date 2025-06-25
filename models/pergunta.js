const mongoose = require("mongoose");
module.exports = mongoose.model("Pergunta", {
  tipo: String,
  texto: String,
  opcoes: [String],
  respostas_por_opcao: Object,
  campeonato_nome: String
});
