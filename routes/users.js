const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Create a new user
router.post('/', async (req, res) => {
  let user = new User({
    name: req.body.name,
    city: req.body.city
  });

  user = await user.save();
  res.send(user);
});

module.exports = router;
