// src/models/Animal.js
const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  especie: {
    type: String,
    required: true,
  },
  raca: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  peso: {
    type: Number,
    required: true,
  },
  historicoMedico: {
    type: String,
  },
  clienteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true,
  },
});

module.exports = mongoose.model('Animal', AnimalSchema);
