const mongoose = require("mongoose");
module.exports = mongoose.model("Interacao", {
  id_usuario: String,
  campeonato: String,
  pergunta: String,
  resposta_fornecida: String,
  data_hora: Date,
  precisou_atendimento: Boolean,
  finalizou_conversa: Boolean
});
