const sinon = require('sinon');
const { expect } = require('chai');
const transferController = require('../../rest/controllers/transferController');

describe('Transfer Controller - Unit', () => {
  it('deve retornar 400 se faltar campos obrigatórios', () => {
    const req = { body: { from: 'A', to: '', amount: null } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    };
    transferController.createTransfer(req, res);
    expect(res.status.calledWith(400)).to.be.true;
    expect(res.json.calledWithMatch({ message: sinon.match.string })).to.be.true;
  });

  it('deve retornar 201 para transferência válida', () => {
    const req = { body: { from: 'A', to: 'B', amount: 10 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    };
    transferController.createTransfer(req, res);
    expect(res.status.calledWith(201)).to.be.true;
    expect(res.json.calledWithMatch({ message: 'Transferência criada com sucesso' })).to.be.true;
  });
});
