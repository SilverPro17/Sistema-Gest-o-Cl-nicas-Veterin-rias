// src/resolvers/consultaResolvers.js
const Consulta = require('../models/Consulta');

const consultaResolvers = {
  Query: {
    getConsultas: async () => {
      return await Consulta.find().populate('animalId veterinarioId');
    },
    getConsulta: async (_, { id }) => {
      return await Consulta.findById(id).populate('animalId veterinarioId');
    },
  },
  Mutation: {
    createConsulta: async (_, { animalId, veterinarioId, data, horario, motivo }) => {
      return await Consulta.create({ animalId, veterinarioId, data, horario, motivo });
    },
    updateConsulta: async (_, { id, status, historicoMedico }) => {
      return await Consulta.findByIdAndUpdate(id, { status, historicoMedico }, { new: true });
    },
  },
};

module.exports = consultaResolvers;
