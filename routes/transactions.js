const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');
const User = require('../models/user');
const Seller = require('../models/seller');
const Car = require('../models/car');
const status = require('../message/status');
const message = require('../message/message');

// Create a new transaction
router.post('/', async (req, res) => {
  const user = await User.findById(req.body.buyerId);
  if (!user) return res.status(status.nBadRequest).send(message.sInvalidUser);

  const seller = await Seller.findById(req.body.sellerId);
  if (!seller) return res.status(status.nBadRequest).send(message.sInvalidSeller);

  const car = await Car.findById(req.body.carId);
  if (!car) return res.status(status.nBadRequest).send(message.sInvalidCar);

  if (user.city !== seller.city) return res.status(status.nBadRequest).send(message.sInvalidCity);

  let transaction = new Transaction({
    buyer: req.body.buyerId,
    seller: req.body.sellerId,
    car: req.body.carId
  });

  transaction = await transaction.save();
  res.send(transaction);
});

// Get all transactions
router.get('/', async (req, res) => {
  const transactions = await Transaction.find()
    .populate('buyer', 'name city')
    .populate('seller', 'name city')
    .populate('car', 'model brand');
  res.send(transactions);
});

module.exports = router;
