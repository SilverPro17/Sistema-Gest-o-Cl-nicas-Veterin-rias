// tests/veterinario.test.js
const request = require('supertest');
const { createTestClient } = require('apollo-server-testing');
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const typeDefs = require('../src/schemas/schema');
const resolvers = require('../src/resolvers'); // Importe todos os resolvers
const connectDB = require('../src/config/db'); // Importe a configuração do Mongoose

const app = express();
const server = new ApolloServer({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
});

const { query } = createTestClient(server);

describe('Veterinario API', () => {
  beforeAll(async () => {
    await connectDB();
  });

  it('deve criar um novo veterinário', async () => {
    const res = await query({
      query: `
        mutation {
          createVeterinario(nome: "Dr. João", especialidades: ["Cirurgia", "Dermatologia"], horariosDisponiveis: ["10:00", "14:00"]) {
            id
            nome
          }
        }
      `,
    });
    expect(res.data.createVeterinario.nome).toEqual("Dr. João");
  });

  it('deve retornar todos os veterinários', async () => {
    const res = await query({
      query: `
        query {
          getVeterinarios {
            id
            nome
          }
        }
      `,
    });
    expect(res.data.getVeterinarios).toBeDefined();
  });
});
