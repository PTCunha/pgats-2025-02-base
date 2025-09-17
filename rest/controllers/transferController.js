// Controller para transferências
exports.createTransfer = (req, res) => {
  const { from, to, amount } = req.body;
  if (!from || !to || !amount) {
    return res.status(400).json({ message: 'Campos obrigatórios: from, to, amount' });
  }
  res.status(201).json({ message: 'Transferência criada com sucesso', transfer: { from, to, amount } });
};
