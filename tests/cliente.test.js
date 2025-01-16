// tests/cliente.test.js
const request = require('supertest');
const app = require('../src/index'); // Ajuste conforme necessário

describe('Cliente API', () => {
  it('deve criar um novo cliente', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: `
          mutation {
            createCliente(nome: "Maria", contato: "987654321", endereco: "Rua B") {
              id
              nome
            }
          }
        `,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.createCliente.nome).toEqual("Maria");
  });

  it('deve retornar todos os clientes', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            getClientes {
              id
              nome
            }
          }
        `,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.getClientes).toBeDefined();
  });
});