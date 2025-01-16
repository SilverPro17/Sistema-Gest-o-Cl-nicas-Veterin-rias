// src/models/Veterinario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Veterinario = sequelize.define('Veterinario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  especialidades: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Array de especialidades
    allowNull: false,
  },
  horariosDisponiveis: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Array de horários disponíveis
    allowNull: false,
  },
});

// Relacionamento
Veterinario.hasMany(Consulta, { foreignKey: 'veterinarioId' });

module.exports = Veterinario;