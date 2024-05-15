const express = require('express');
const router = express.Router();
const User = require('../models/user');
const message = require('../message/message');
const status = require('../message/status');

router.post('/', async (req, res) => {
  const { name, city } = req.body;
  try {
    const newUser = new User({ name, city });
    await newUser.save();
    res.status(status.nCreated).send(newUser);
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
