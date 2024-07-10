import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDay } = useTheme();

  return (
    <footer className={`relative flex flex-col md:flex-row justify-between items-center p-2 border-t border-gray-300 bg-opacity-70 z-10 ${isDay ? 'text-black' : 'text-white'}`}>
      <span>DHU AL-HIJJAH 14, 1445</span>
      <span className="mt-2 md:mt-0">A project by Abdimahad, ID: C1210010</span>
    </footer>
  );
};

export default Footer;
