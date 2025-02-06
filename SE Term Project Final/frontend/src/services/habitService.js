const API_URL = process.env.REACT_APP_API_URL;

const getHabits = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

const createHabit = async (habit) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(habit),
  });
  return response.json();
};

export default { getHabits, createHabit };