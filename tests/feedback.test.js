// tests/feedback.test.js
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

describe('Feedback API', () => {
  beforeAll(async () => {
    await connectDB();
  });

  it('deve criar um novo feedback', async () => {
    const res = await query({
      query: `
        mutation {
          createFeedback(consultaId: "1", nota: 5, comentario: "Ótimo atendimento!") {
            id
            nota
          }
        }
      `,
    });
    expect(res.data.createFeedback.nota).toEqual(5);
  });

  it('deve retornar todos os feedbacks', async () => {
    const res = await query({
      query: `
        query {
          getFeedbacks {
            id
            nota
          }
        }
      `,
    });
    expect(res.data.getFeedbacks).toBeDefined();
  });
});
