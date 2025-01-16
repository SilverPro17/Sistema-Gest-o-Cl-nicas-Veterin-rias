// tests/veterinario.test.js
const request = require('supertest');
const app = require('../src/index'); // Ajuste conforme necessário

describe('Veterinario API', () => {
  it('deve criar um novo veterinário', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: `
          mutation {
            createVeterinario(nome: "Dr. João", especialidades: ["Cirurgia", "Dermatologia"], horariosDisponiveis: ["10:00", "14:00"]) {
              id
              nome
            }
          }
        `,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.createVeterinario.nome).toEqual("Dr. João");
  });

  it('deve retornar todos os veterinários', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            getVeterinarios {
              id
              nome
            }
          }
        `,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.getVeterinarios).toBeDefined();
  });
});