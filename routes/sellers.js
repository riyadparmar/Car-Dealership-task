const express = require('express');
const router = express.Router();
const Seller = require('../models/seller');
const Car = require('../models/car');

// Create a new seller
router.post('/', async (req, res) => {
  let seller = new Seller({
    name: req.body.name,
    city: req.body.city,
    cars: req.body.carIds // list of car IDs
  });

  seller = await seller.save();
  res.send(seller);
});

// Get sellers by city
router.get('/city/:city', async (req, res) => {
  const sellers = await Seller.find({ city: req.params.city }).populate('cars');
  res.send(sellers);
});

module.exports = router;