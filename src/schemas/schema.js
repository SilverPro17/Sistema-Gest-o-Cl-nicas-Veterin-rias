const { gql } = require('apollo-server-express');

// Definição dos tipos GraphQL
const typeDefs = gql`
  type Cliente {
    id: ID!
    nome: String!
    contato: String!
    endereco: String!
    animais: [Animal]
  }

  type Animal {
    id: ID!
    nome: String!
    especie: String!
    raca: String!
    idade: Int!
    peso: Float!
    historicoMedico: String
    clienteId: ID!
    cliente: Cliente
  }

  type Veterinario {
    id: ID!
    nome: String!
    especialidades: [String!]!
    horariosDisponiveis: [String!]!
    consultas: [Consulta]
  }

  type Consulta {
    id: ID!
    animalId: ID!
    veterinarioId: ID!
    data: String!
    horario: String!
    motivo: String!
    status: String!
    historicoMedico: String
    animal: Animal
    veterinario: Veterinario
  }

  type Feedback {
    id: ID!
    consultaId: ID!
    nota: Int!
    comentario: String
    consulta: Consulta
  }

  type Query {
    getClientes: [Cliente]
    getCliente(id: ID!): Cliente
    getAnimais: [Animal]
    getAnimal(id: ID!): Animal
    getVeterinarios: [Veterinario]
    getVeterinario(id: ID!): Veterinario
    getConsultas: [Consulta]
    getConsulta(id: ID!): Consulta
    getFeedbacks: [Feedback]
    getFeedback(id: ID!): Feedback
  }

  type Mutation {
    createCliente(nome: String!, contato: String!, endereco: String!): Cliente
    updateCliente(id: ID!, nome: String, contato: String, endereco: String): Cliente

    createAnimal(nome: String!, especie: String!, raca: String!, idade: Int!, peso: Float!, clienteId: ID!): Animal
    updateAnimal(id: ID!, nome: String, especie: String, raca: String, idade: Int, peso: Float): Animal

    createVeterinario(nome: String!, especialidades: [String!]!, horariosDisponiveis: [String!]!): Veterinario
    updateVeterinario(id: ID!, nome: String, especialidades: [String], horariosDisponiveis: [String]): Veterinario

    createConsulta(animalId: ID!, veterinarioId: ID!, data: String!, horario: String!, motivo: String!): Consulta
    updateConsulta(id: ID!, status: String, historicoMedico: String): Consulta

    createFeedback(consultaId: ID!, nota: Int!, comentario: String): Feedback
  }
`;

module.exports = typeDefs;
