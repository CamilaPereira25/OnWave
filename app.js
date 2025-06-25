const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// 🔗 Conexão MongoDB Atlas via .env
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.log(err));

// 🌐 Rotas
app.use("/campeonatos", require("./routes/campeonatos"));
app.use("/perguntas", require("./routes/perguntas"));
app.use("/interacoes", require("./routes/interacoes"));

// 🚪 Porta
app.listen(3000, () => console.log("🚀 Servidor rodando: http://localhost:3000"));
