import React, { useState, useEffect } from 'react';
import habitService from '../services/habitService';

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');

  useEffect(() => {
    habitService.getHabits().then((data) => {
      setHabits(data);
    });
  }, []);

  const addHabit = () => {
    habitService.createHabit({ name: newHabit, frequency: 'Daily' }).then((data) => {
      setHabits([...habits, data]);
      setNewHabit('');
    });
  };

  return (
    <div>
      <h2>Your Habits</h2>
      <ul>
        {habits.map((habit) => (
          <li key={habit._id}>{habit.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        placeholder="New Habit"
      />
      <button onClick={addHabit}>Add Habit</button>
    </div>
  );
};

export default HabitTracker;