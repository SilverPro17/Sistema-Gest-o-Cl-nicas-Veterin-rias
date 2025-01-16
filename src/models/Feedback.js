// src/models/Feedback.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Consulta = require('./Consulta');

const Feedback = sequelize.define('Feedback', {
  nota: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5, // Nota de 1 a 5
    },
  },
  comentario: {
    type: DataTypes.TEXT,
  },
});

// Relacionamento
Feedback.belongsTo(Consulta, { foreignKey: 'consultaId' });

module.exports = Feedback;