// src/resolvers/clienteResolvers.js
const Cliente = require('../models/Cliente');

const clienteResolvers = {
  Query: {
    getClientes: async () => {
      return await Cliente.find();
    },
    getCliente: async (_, { id }) => {
      return await Cliente.findById(id);
    },
  },
  Mutation: {
    createCliente: async (_, { nome, contato, endereco }) => {
      return await Cliente.create({ nome, contato, endereco });
    },
    updateCliente: async (_, { id, nome, contato, endereco }) => {
      return await Cliente.findByIdAndUpdate(id, { nome, contato, endereco }, { new: true });
    },
  },
};

module.exports = clienteResolvers;
