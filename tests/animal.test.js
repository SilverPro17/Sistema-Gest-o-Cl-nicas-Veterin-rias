// tests/animal.test.js
const request = require('supertest');
const app = require('../src/index'); // Ajuste conforme necessário

describe('Animal API', () => {
  it('deve criar um novo animal', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: `
          mutation {
            createAnimal(nome: "Rex", especie: "Cachorro", raca: "Labrador", idade: 3, peso: 30.5, clienteId: "1") {
              id
              nome
            }
          }
        `,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.createAnimal.nome).toEqual("Rex");
  });

  it('deve retornar todos os animais', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            getAnimais {
              id
              nome
            }
          }
        `,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.getAnimais).toBeDefined();
  });
});