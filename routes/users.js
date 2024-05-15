const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
  const { name, city } = req.body;
  try {
    const newUser = new User({ name, city });
    await newUser.save();
    res.status(201).send(newUser);
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
