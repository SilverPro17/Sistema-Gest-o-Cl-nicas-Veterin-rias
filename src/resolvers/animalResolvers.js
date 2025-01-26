// src/resolvers/animalResolvers.js
const Animal = require('../models/Animal');
const Cliente = require('../models/Cliente');

const animalResolvers = {
  Query: {
    getAnimais: async () => {
      return await Animal.find().populate('clienteId');
    },
    getAnimal: async (_, { id }) => {
      return await Animal.findById(id).populate('clienteId');
    },
  },
  Mutation: {
    createAnimal: async (_, { nome, especie, raca, idade, peso, clienteId }) => {
      return await Animal.create({ nome, especie, raca, idade, peso, clienteId });
    },
    updateAnimal: async (_, { id, nome, especie, raca, idade, peso }) => {
      return await Animal.findByIdAndUpdate(id, { nome, especie, raca, idade, peso }, { new: true });
    },
  },
};

module.exports = animalResolvers;
