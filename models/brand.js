const mongoose = require('mongoose');
const brandValidations = require('../validations/brand');

const brandSchema = new mongoose.Schema(brandValidations);

const Brand = mongoose.model('Brand', brandSchema);
module.exports = Brand;
