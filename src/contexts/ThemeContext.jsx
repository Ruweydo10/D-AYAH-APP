import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDay, setIsDay] = useState(true);

  const toggleTheme = () => {
    setIsDay(!isDay);
  };

  return (
    <ThemeContext.Provider value={{ isDay, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
