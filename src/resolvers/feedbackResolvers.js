// src/resolvers/feedbackResolvers.js
const Feedback = require('../models/Feedback');
const Consulta = require('../models/Consulta');

const feedbackResolvers = {
  Query: {
    getFeedbacks: async () => {
      return await Feedback.findAll({ include: [Consulta] });
    },
    getFeedback: async (_, { id }) => {
      return await Feedback.findByPk(id, { include: [Consulta] });
    },
  },
  Mutation: {
    createFeedback: async (_, { consultaId, nota, comentario }) => {
      return await Feedback.create({ consultaId, nota, comentario });
    },
  },
};

module.exports = feedbackResolvers;