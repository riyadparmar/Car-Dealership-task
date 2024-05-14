const mongoose = require('mongoose');
const Car = require('./car');

const sellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  cars: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Car' }]
});

const Seller = mongoose.model('Seller', sellerSchema);
module.exports = Seller;
