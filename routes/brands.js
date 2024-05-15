const express = require('express');
const router = express.Router();
const Brand = require('../models/brand');

router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const newBrand = new Brand({ name });
    await newBrand.save();
    res.status(201).send(newBrand);
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
