const express = require('express');
const mongoose = require('mongoose');
const habitRoutes = require('./routes/habitRoutes');
const config = require('./config');

const app = express();

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/api/habits', habitRoutes);

module.exports = app;