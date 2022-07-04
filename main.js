const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const fibonacciRoutes = require('./routes/fibonacci.route');

const { PORT, DATABASE_CREDENTIALS: { MONGODB_URL } } = require('./config');

// APP INITIALIZING

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fibonacciRoutes);

mongoose.connect(MONGODB_URL);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})

