import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import image1 from '../assets/images/quran-karim.png';
import menuIcon from '../assets/images/menu-icon.png';
import ThemeToggle from './ThemeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const { isDay } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const sidebarRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      setActiveSection(null);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={`relative flex justify-between items-center p-4 border-b border-gray-300 bg-opacity-70 z-10 ${isDay ? 'text-black' : 'text-white'} md:flex-row flex-col`}>
      <div className="flex items-center mb-4 md:mb-0">
        <img src={image1} alt="Ayah a Day" className="h-8 w-8 mr-2" />
        <span className="text-lg font-semibold">Ayah a Day.</span>
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <button onClick={toggleMenu} className="p-2 rounded transition-colors">
          <img src={menuIcon} alt="Menu" className="h-8 w-8" />
        </button>
      </div>
      {isMenuOpen && (
        <div
          ref={sidebarRef}
          className="absolute top-16 right-0 w-64 bg-white bg-opacity-90 z-20 p-4 shadow-lg text-black"
        >
          <div className="flex justify-between space-x-2">
            <button
              onClick={() => handleSectionClick('about')}
              className={`px-4 py-2 rounded transition-colors w-full text-center cursor-pointer ${activeSection === 'about' ? 'bg-blue-200' : 'bg-gray-200 hover:bg-blue-100'}`}
            >
              About Us
            </button>
            <button
              onClick={() => handleSectionClick('contact')}
              className={`px-4 py-2 rounded transition-colors w-full text-center cursor-pointer ${activeSection === 'contact' ? 'bg-blue-200' : 'bg-gray-200 hover:bg-blue-100'}`}
            >
              Contact Us
            </button>
          </div>
          {activeSection === 'about' && (
            <div className="p-2 bg-gray-100 rounded shadow-lg mt-2">
              <p>We are dedicated to providing daily Ayahs and Islamic knowledge to our community.</p>
            </div>
          )}
          {activeSection === 'contact' && (
            <div className="p-2 bg-gray-100 rounded shadow-lg mt-2">
              <div className="flex space-x-4 justify-center">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-blue-600">
                  <FontAwesomeIcon icon={faFacebook} className="h-8 w-8" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-pink-600">
                  <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-blue-400">
                  <FontAwesomeIcon icon={faTwitter} className="h-8 w-8" />
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-blue-400">
                  <FontAwesomeIcon icon={faTelegram} className="h-8 w-8" />
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
