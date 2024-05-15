const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');
const message = require('../message/message');
const status = require('../message/status');

router.post('/', async (req, res) => {
  const { buyerId, sellerId, carId } = req.body;
  try {
    const newTransaction = new Transaction({ buyer: buyerId, seller: sellerId, car: carId });
    await newTransaction.save();
    res.status(status.nCreated).send(newTransaction);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(status.nBadRequest).json({
        message: 'Validation Error',
        errors: error.errors
      });
    }
    res.status(status.nInternalServerError).send(message.sInternalServerError);
  }
});

router.get('/', async (req, res) => {
  const transactions = await Transaction.find()
    .populate('buyer', 'name city')
    .populate('seller', 'name city')
    .populate('car', 'model brand');
  res.send(transactions);
});

module.exports = router;
