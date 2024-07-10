import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDay, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded ${isDay ? 'bg-yellow-300' : 'bg-gray-700 text-white'} transition-colors`}
    >
      {isDay ? 'Day' : 'Night'}
    </button>
  );
};

export default ThemeToggle;
