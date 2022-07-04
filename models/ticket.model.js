const { Schema, model } = require('mongoose');

const { DATABASE_MODEL_NAMES } = require('../config');

const schema = new Schema({
  number: {
    type: Number,
    required: true,
  },
});

module.exports = model(DATABASE_MODEL_NAMES.TICKET, schema);