// src/config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'postgres', // ou 'mysql'
});

module.exports = sequelize;