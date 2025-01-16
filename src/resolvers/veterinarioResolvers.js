// src/resolvers/veterinarioResolvers.js
const Veterinario = require('../models/Veterinario');

const veterinarioResolvers = {
  Query: {
    getVeterinarios: async () => {
      return await Veterinario.findAll();
    },
    getVeterinario: async (_, { id }) => {
      return await Veterinario.findByPk(id);
    },
  },
  Mutation: {
    createVeterinario: async (_, { nome, especialidades, horariosDisponiveis }) => {
      return await Veterinario.create({ nome, especialidades, horariosDisponiveis });
    },
    updateVeterinario: async (_, { id, nome, especialidades, horariosDisponiveis }) => {
      const veterinario = await Veterinario.findByPk(id);
      if (veterinario) {
        veterinario.nome = nome || veterinario.nome;
        veterinario.especialidades = especialidades || veterinario.especialidades;
        veterinario.horariosDisponiveis = horariosDisponiveis || veterinario.horariosDisponiveis;
        await veterinario.save();
        return veterinario;
      }
      throw new Error('Veterinário não encontrado');
    },
  },
};

module.exports = veterinarioResolvers;