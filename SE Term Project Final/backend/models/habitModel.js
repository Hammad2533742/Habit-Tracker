const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  frequency: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date },
  status: { type: String, enum: ['Completed', 'Pending', 'Skipped'], default: 'Pending' },
}, { timestamps: true });

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;