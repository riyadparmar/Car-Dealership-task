const express = require('express');
const router = express.Router();
const Car = require('../models/car');
const Brand = require('../models/brand');
const status = require('../message/status');
const message = require('../message/message');

// Create a new car
router.post('/', async (req, res) => {
  const brand = await Brand.findById(req.body.brandId);
  if (!brand) return res.status(status.nBadRequest).send(message.sInvalidBrand);

  let car = new Car({
    model: req.body.model,
    brand: req.body.brandId
  });

  car = await car.save();
  res.send(car);
});

module.exports = router;
