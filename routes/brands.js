const express = require('express');
const router = express.Router();
const Brand = require('../models/brand');
const message = require('../message/message');
const status = require('../message/status');

router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const newBrand = new Brand({ name });
    await newBrand.save();
    res.status(status.nCreated).send(newBrand);
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
