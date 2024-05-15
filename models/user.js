const mongoose = require('mongoose');
const userValidations = require('../validations/user');

const userSchema = new mongoose.Schema(userValidations);

const User = mongoose.model('User', userSchema);
module.exports = User;
