const mongoose = require('mongoose');
const carValidations = require('../validations/car');

const carSchema = new mongoose.Schema(carValidations);

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
