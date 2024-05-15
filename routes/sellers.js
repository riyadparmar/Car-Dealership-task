const express = require('express');
const router = express.Router();
const Seller = require('../models/seller');

router.post('/', async (req, res) => {
  const { name, city, carIds } = req.body;
  try {
    const newSeller = new Seller({ name, city, cars: carIds });
    await newSeller.save();
    res.status(201).send(newSeller);
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