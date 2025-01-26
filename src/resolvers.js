// src/resolvers.js
const animalResolvers = require('./resolvers/animalResolvers');
const clienteResolvers = require('./resolvers/clienteResolvers');
const consultaResolvers = require('./resolvers/consultaResolvers');
const feedbackResolvers = require('./resolvers/feedbackResolvers');
const veterinarioResolvers = require('./resolvers/veterinarioResolvers');

const resolvers = {
  Query: {
    ...animalResolvers.Query,
    ...clienteResolvers.Query,
    ...consultaResolvers.Query,
    ...feedbackResolvers.Query,
    ...veterinarioResolvers.Query,
  },
  Mutation: {
    ...animalResolvers.Mutation,
    ...clienteResolvers.Mutation,
    ...consultaResolvers.Mutation,
    ...feedbackResolvers.Mutation,
    ...veterinarioResolvers.Mutation,
  },
};

module.exports = resolvers;
