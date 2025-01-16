// src/resolvers/animalResolvers.js
const Animal = require('../models/Animal');
const Cliente = require('../models/Cliente');

const animalResolvers = {
  Query: {
    getAnimais: async () => {
      return await Animal.findAll({ include: [Cliente] }); // Inclui informações do cliente
    },
    getAnimal: async (_, { id }) => {
      return await Animal.findByPk(id, { include: [Cliente] });
    },
  },
  Mutation: {
    createAnimal: async (_, { nome, especie, raca, idade, peso, clienteId }) => {
      return await Animal.create({ nome, especie, raca, idade, peso, clienteId });
    },
    updateAnimal: async (_, { id, nome, especie, raca, idade, peso }) => {
      const animal = await Animal.findByPk(id);
      if (animal) {
        animal.nome = nome || animal.nome;
        animal.especie = especie || animal.especie;
        animal.raca = raca || animal.raca;
        animal.idade = idade || animal .idade;
        animal.peso = peso || animal.peso;
        await animal.save();
        return animal;
      }
      throw new Error('Animal não encontrado');
    },
  },
};

module.exports = animalResolvers;