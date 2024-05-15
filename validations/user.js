const mongoose = require('mongoose');
module.exports = {
    name: {
      type: String,
      required: [true, 'User name is required'],
      minlength: [2, 'User name must be at least 2 characters long'],
      maxlength: [100, 'User name must be at most 100 characters long']
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      minlength: [2, 'City name must be at least 2 characters long'],
      maxlength: [100, 'City name must be at most 100 characters long']
    }
  };
  