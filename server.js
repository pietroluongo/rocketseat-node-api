const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const requireDir = require("require-dir")


// Inicialização do app
const app = express();
app.use(express.json());
app.use(cors());

// Inicialização do DB
mongoose.connect(
    "mongodb://192.168.0.13:27017/nodeapi",
    { useUnifiedTopology: true,
      useNewUrlParser: true }
);

requireDir("./src/models");


// Rota genérica
app.use('/api', require('./src/routes'));

app.listen(3001);