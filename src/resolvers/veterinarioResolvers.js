// src/resolvers/veterinarioResolvers.js
const Veterinario = require('../models/Veterinario');

const veterinarioResolvers = {
  Query: {
    getVeterinarios: async () => {
      return await Veterinario.find();
    },
    getVeterinario: async (_, { id }) => {
      return await Veterinario.findById(id);
    },
  },
  Mutation: {
    createVeterinario: async (_, { nome, especialidades, horariosDisponiveis }) => {
      return await Veterinario.create({ nome, especialidades, horariosDisponiveis });
    },
    updateVeterinario: async (_, { id, nome, especialidades, horariosDisponiveis }) => {
      return await Veterinario.findByIdAndUpdate(id, { nome, especialidades, horariosDisponiveis }, { new: true });
    },
  },
};

module.exports = veterinarioResolvers;
