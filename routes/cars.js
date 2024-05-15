const express = require('express');
const router = express.Router();
const Car = require('../models/car');

router.post('/', async (req, res) => {
  const { model, brandId } = req.body;
  try {
    const newCar = new Car({ model, brand: brandId });
    await newCar.save();
    res.status(201).send(newCar);
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
