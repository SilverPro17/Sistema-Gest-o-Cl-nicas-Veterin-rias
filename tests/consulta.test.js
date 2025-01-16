// tests/consulta.test.js
const request = require('supertest');
const app = require('../src/index'); // Ajuste conforme necessário

describe('Consulta API', () => {
  it('deve criar uma nova consulta', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: `
          mutation {
            createConsulta(animalId: "1", veterinarioId: "1", data: "2023-10-01", horario: "10:00", motivo: "Check-up") {
              id
              motivo
            }
          }
        `,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.createConsulta.motivo).toEqual("Check-up");
  });

  it('deve retornar todas as consultas', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            getConsultas {
              id
              motivo
            }
          }
        `,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.getConsultas).toBeDefined();
  });
});