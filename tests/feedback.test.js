// tests/feedback.test.js
const request = require('supertest');
const app = require('../src/index'); // Ajuste conforme necessário

describe('Feedback API', () => {
  it('deve criar um novo feedback', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: `
          mutation {
            createFeedback(consultaId: "1", nota: 5, comentario: "Ótimo atendimento!") {
              id
              nota
            }
          `,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.createFeedback.nota).toEqual(5);
  });

  it('deve retornar todos os feedbacks', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            getFeedbacks {
              id
              nota
            }
          }
        `,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.getFeedbacks).toBeDefined();
  });
});