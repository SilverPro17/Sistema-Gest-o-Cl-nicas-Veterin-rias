// src/models/Veterinario.js
const mongoose = require('mongoose');

const VeterinarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  especialidades: {
    type: [String],
    required: true,
  },
  horariosDisponiveis: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model('Veterinario', VeterinarioSchema);
