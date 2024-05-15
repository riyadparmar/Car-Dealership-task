const mongoose = require('mongoose');
const sellerValidations = require('../validations/seller');

const sellerSchema = new mongoose.Schema(sellerValidations);

const Seller = mongoose.model('Seller', sellerSchema);
module.exports = Seller;
