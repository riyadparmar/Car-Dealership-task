const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

router.post('/', async (req, res) => {
  const { buyerId, sellerId, carId } = req.body;
  try {
    const newTransaction = new Transaction({ buyer: buyerId, seller: sellerId, car: carId });
    await newTransaction.save();
    res.status(201).send(newTransaction);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Validation Error',
        errors: error.errors
      });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
