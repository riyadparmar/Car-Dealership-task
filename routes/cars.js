const express = require('express');
const router = express.Router();
const Car = require('../models/car');
const message = require('../message/message');
const status = require('../message/status');

router.post('/', async (req, res) => {
  const { model, brandId } = req.body;
  try {
    const newCar = new Car({ model, brand: brandId });
    await newCar.save();
    res.status(status.nCreated).send(newCar);
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

module.exports = router;
