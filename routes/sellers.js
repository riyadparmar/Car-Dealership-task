const express = require('express');
const router = express.Router();
const Seller = require('../models/seller');
const message = require('../message/message');
const status = require('../message/status');

router.post('/', async (req, res) => {
  const { name, city, carIds } = req.body;
  try {
    const newSeller = new Seller({ name, city, cars: carIds });
    await newSeller.save();
    res.status(status.nCreated).send(newSeller);
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

router.get('/city/:city', async (req, res) => {
  const sellers = await Seller.find({ city: req.params.city }).populate('cars');
  res.send(sellers);
});

module.exports = router;