const Habit = require('../models/habitModel');

const getHabits = async (req, res) => {
  const habits = await Habit.find();
  res.json(habits);
};

const createHabit = async (req, res) => {
  const newHabit = new Habit(req.body);
  await newHabit.save();
  res.status(201).json(newHabit);
};

const updateHabit = async (req, res) => {
  const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!habit) {
    return res.status(404).json({ message: 'Habit not found' });
  }
  res.json(habit);
};

const deleteHabit = async (req, res) => {
  const habit = await Habit.findByIdAndDelete(req.params.id);
  if (!habit) {
    return res.status(404).json({ message: 'Habit not found' });
  }
  res.status(204).end();
};

module.exports = { getHabits, createHabit, updateHabit, deleteHabit };