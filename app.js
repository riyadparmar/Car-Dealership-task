const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/carSales', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const brands = require('./routes/brands');
const cars = require('./routes/cars');
const sellers = require('./routes/sellers');
const users = require('./routes/users');
const transactions = require('./routes/transactions');

app.use('/api/brands', brands);
app.use('/api/cars', cars);
app.use('/api/sellers', sellers);
app.use('/api/users', users);
app.use('/api/transactions', transactions);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
