// tests/cliente.test.js
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

describe('Cliente API', () => {
  beforeAll(async () => {
    await connectDB();
  });

  it('deve criar um novo cliente', async () => {
    const res = await query({
      query: `
        mutation {
          createCliente(nome: "Maria", contato: "987654321", endereco: "Rua B") {
            id
            nome
          }
        }
      `,
    });
    expect(res.data.createCliente.nome).toEqual("Maria");
  });

  it('deve retornar todos os clientes', async () => {
    const res = await query({
      query: `
        query {
          getClientes {
            id
            nome
          }
        }
      `,
    });
    expect(res.data.getClientes).toBeDefined();
  });
});
