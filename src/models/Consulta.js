// src/models/Consulta.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Animal = require('./Animal');
const Veterinario = require('./Veterinario');

const Consulta = sequelize.define('Consulta', {
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  horario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  motivo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('agendada', 'realizada', 'cancelada'),
    defaultValue: 'agendada',
  },
  historicoMedico: {
    type: DataTypes.TEXT,
  },
});

// Relacionamentos
Consulta.belongsTo(Animal, { foreignKey: 'animalId' });
Consulta.belongsTo(Veterinario, { foreignKey: 'veterinarioId' });

module.exports = Consulta;