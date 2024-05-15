module.exports = {
    model: {
      type: String,
      required: [true, 'Car model is required'],
      minlength: [1, 'Car model must be at least 1 character long'],
      maxlength: [50, 'Car model must be at most 50 characters long']
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
      required: [true, 'Brand ID is required']
    }
};
  