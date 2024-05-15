module.exports = {
    name: {
      type: String,
      required: [true, 'Brand name is required'],
      minlength: [2, 'Brand name must be at least 2 characters long'],
      maxlength: [50, 'Brand name must be at most 50 characters long']
    }
  };
  