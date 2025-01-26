// tests/animal.test.js
const request = require('supertest');
const { createTestClient } = require('apollo-server-testing');
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const typeDefs = require('../src/schemas/schema');
const resolvers = require('../src/resolvers'); 
const connectDB = require('../src/config/db'); 

const app = express();
const server = new ApolloServer({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
});

const { query } = createTestClient(server);

describe('Animal API', () => {
  beforeAll(async () => {
    await connectDB();
  });

  it('deve criar um novo animal', async () => {
    const res = await query({
      query: `
        mutation {
          createAnimal(nome: "Rex", especie: "Cachorro", raca: "Labrador", idade: 3, peso: 30.5, clienteId: "1") {
            id
            nome
          }
        }
      `,
    });
    expect(res.data.createAnimal.nome).toEqual("Rex");
  });

  it('deve retornar todos os animais', async () => {
    const res = await query({
      query: `
        query {
          getAnimais {
            id
            nome
          }
        }
      `,
    });
    expect(res.data.getAnimais).toBeDefined();
  });
});
