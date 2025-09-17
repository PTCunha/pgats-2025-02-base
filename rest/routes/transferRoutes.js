const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transferController');

router.post('/transfers', transferController.createTransfer);

module.exports = router;
