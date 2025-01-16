// src/resolvers/consultaResolvers.js
const Consulta = require('../models/Consulta');
const Animal = require('../models/Animal');
const Veterinario = require('../models/Veterinario');

const consultaResolvers = {
  Query: {
    getConsultas: async () => {
      return await Consulta.findAll({
        include: [Animal, Veterinario], // Inclui informações do animal e veterinário
      });
    },
    getConsulta: async (_, { id }) => {
      return await Consulta.findByPk(id, {
        include: [Animal, Veterinario],
      });
    },
  },
  Mutation: {
    createConsulta: async (_, { animalId, veterinarioId, data, horario, motivo }) => {
      return await Consulta.create({ animalId, veterinarioId, data, horario, motivo });
    },
    updateConsulta: async (_, { id, status, historicoMedico }) => {
      const consulta = await Consulta.findByPk(id);
      if (consulta) {
        consulta.status = status || consulta.status;
        consulta.historicoMedico = historicoMedico || consulta.historicoMedico;
        await consulta.save();
        return consulta;
      }
      throw new Error('Consulta não encontrada');
    },
  },
};

module.exports = consultaResolvers;