// src/resolvers/feedbackResolvers.js
const Feedback = require('../models/Feedback');

const feedbackResolvers = {
  Query: {
    getFeedbacks: async () => {
      return await Feedback.find().populate('consultaId');
    },
    getFeedback: async (_, { id }) => {
      return await Feedback.findById(id).populate('consultaId');
    },
  },
  Mutation: {
    createFeedback: async (_, { consultaId, nota, comentario }) => {
      return await Feedback.create({ consultaId, nota, comentario });
    },
  },
};

module.exports = feedbackResolvers;
