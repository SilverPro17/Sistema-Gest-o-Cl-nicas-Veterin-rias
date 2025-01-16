// ```javascript
// src/resolvers/clienteResolvers.js
const Cliente = require('../models/Cliente');

const clienteResolvers = {
  Query: {
    getClientes: async () => {
      return await Cliente.findAll();
    },
    getCliente: async (_, { id }) => {
      return await Cliente.findByPk(id);
    },
  },
  Mutation: {
    createCliente: async (_, { nome, contato, endereco }) => {
      return await Cliente.create({ nome, contato, endereco });
    },
    updateCliente: async (_, { id, nome, contato, endereco }) => {
      const cliente = await Cliente.findByPk(id);
      if (cliente) {
        cliente.nome = nome || cliente.nome;
        cliente.contato = contato || cliente.contato;
        cliente.endereco = endereco || cliente.endereco;
        await cliente.save();
        return cliente;
      }
      throw new Error('Cliente não encontrado');
    },
  },
};

module.exports = clienteResolvers;