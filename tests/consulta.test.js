// tests/consulta.test.js
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

describe('Consulta API', () => {
  beforeAll(async () => {
    await connectDB();
  });

  it('deve criar uma nova consulta', async () => {
    const res = await query({
      query: `
        mutation {
          createConsulta(animalId: "1", veterinarioId: "1", data: "2023-10-01", horario: "10:00", motivo: "Check-up") {
            id
            motivo
          }
        }
      `,
    });
    expect(res.data.createConsulta.motivo).toEqual("Check-up");
  });

  it('deve retornar todas as consultas', async () => {
    const res = await query({
      query: `
        query {
          getConsultas {
            id
            motivo
          }
        }
      `,
    });
    expect(res.data.getConsultas).toBeDefined();
  });
});
