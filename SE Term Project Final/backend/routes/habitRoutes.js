const express = require('express');
const { getHabits, createHabit, updateHabit, deleteHabit } = require('../controllers/habitController');

const router = express.Router();

router.route('/')
  .get(getHabits)
  .post(createHabit);

router.route('/:id')
  .put(updateHabit)
  .delete(deleteHabit);

module.exports = router;