const mongoose = require("mongoose");
module.exports = mongoose.model("Campeonato", {
  nome: String,
  localizacao: String,
  data_inicio: String,
  data_fim: String,
  categorias: [String],
  premiacao: String
});
