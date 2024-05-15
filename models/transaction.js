const mongoose = require('mongoose');
const transactionValidations = require('../validations/transaction');

const transactionSchema = new mongoose.Schema(transactionValidations);

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
