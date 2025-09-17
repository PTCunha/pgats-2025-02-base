const request = require('supertest');
const { expect } = require('chai');
const app = require('../../graphql/app');

describe('GraphQL API - Integração', () => {
  before(done => setTimeout(done, 500));
  it('deve retornar usuários', async () => {
    const res = await request(app)
      .post('/graphql')
      .set('Content-Type', 'application/json')
      .send({
        query: `
          {
            users {
              name
              email
            }
          }
        `
      });
    expect(res.status).to.equal(200);
    expect(res.body.data).to.have.property('users');
  });
});
