const request = require('supertest');
const { expect } = require('chai');
const app = require('../../rest/app');

describe('Transfer REST API - Integração', () => {
  it('POST /api/transfers - sucesso', async () => {
    const res = await request(app)
      .post('/api/transfers')
      .send({ from: 'A', to: 'B', amount: 50 });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('message');
  });

  it('POST /api/transfers - erro campos faltando', async () => {
    const res = await request(app)
      .post('/api/transfers')
      .send({ from: 'A', amount: 50 });
    expect(res.status).to.equal(400);
    expect(res.body).to.have.property('message');
  });
});
