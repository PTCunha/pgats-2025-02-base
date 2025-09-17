const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

const app = require('../../rest/app');

describe('Transfer Controller', () => {
    describe('POST /api/transfers', () => {
        it('Quando uso dados válidos o retorno será 201', async () => {
            const resposta = await request(app)
                .post('/api/transfers')
                .send({
                    from: 'Alice',
                    to: 'Bob',
                    amount: 100.50
                });
            expect(resposta.status).to.equal(201);
        });
    });
});
