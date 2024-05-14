const express = require('express');
const router = express.Router();
const Brand = require('../models/brand');

// Create a new brand
router.post('/', async (req, res) => {
  let brand = new Brand({ name: req.body.name });
  brand = await brand.save();
  res.send(brand);
});

module.exports = router;
