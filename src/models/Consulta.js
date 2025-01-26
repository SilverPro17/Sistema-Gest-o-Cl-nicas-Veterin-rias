// src/models/Consulta.js
const mongoose = require('mongoose');

const ConsultaSchema = new mongoose.Schema({
  data: {
    type: Date,
    required: true,
  },
  horario: {
    type: String,
    required: true,
  },
  motivo: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['agendada', 'realizada', 'cancelada'],
    default: 'agendada',
  },
  historicoMedico: {
    type: String,
  },
  animalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Animal',
    required: true,
  },
  veterinarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Veterinario',
    required: true,
  },
});

module.exports = mongoose.model('Consulta', ConsultaSchema);
