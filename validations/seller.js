module.exports = {
    name: {
      type: String,
      required: [true, 'Seller name is required'],
      minlength: [2, 'Seller name must be at least 2 characters long'],
      maxlength: [100, 'Seller name must be at most 100 characters long']
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      minlength: [2, 'City name must be at least 2 characters long'],
      maxlength: [100, 'City name must be at most 100 characters long']
    },
    cars: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car'
    }]
  };
  