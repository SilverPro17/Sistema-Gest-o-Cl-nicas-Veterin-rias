// src/models/Feedback.js
const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  nota: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comentario: {
    type: String,
  },
  consultaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Consulta',
    required: true,
  },
});

let Feedback;

try {
  Feedback = mongoose.model('Feedback');
} catch (error) {
  Feedback = mongoose.model('Feedback', FeedbackSchema);
}

module.exports = Feedback;
