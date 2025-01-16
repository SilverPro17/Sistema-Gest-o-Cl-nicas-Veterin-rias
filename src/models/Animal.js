// src/models/Animal.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Cliente = require('./Cliente');

const Animal = sequelize.define('Animal', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  especie: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  raca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  peso: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  historicoMedico: {
    type: DataTypes.TEXT,
  },
});

// Relacionamento
Animal.belongsTo(Cliente, { foreignKey: 'clienteId' });

module.exports = Animal;