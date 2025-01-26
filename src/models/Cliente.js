// src/models/Cliente.js
const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  contato: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Cliente', ClienteSchema);
