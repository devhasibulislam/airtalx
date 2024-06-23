// models/History.js

const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  designation: { type: String, required: true },
  posted_date: { type: Date, required: true },
  active: { type: Number, required: true },
  awaiting: { type: Number, required: true },
  conducting: { type: Number, required: true },
  hired: { type: Number, required: true },
  location: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

const History = mongoose.model('History', historySchema);

module.exports = History;
