import React from 'react';
import facebookIcon from '../assets/images/facebook.png';
import instagramIcon from '../assets/images/instagram.png';
import twitterIcon from '../assets/images/twitter.png';
import telegramIcon from '../assets/images/telegram.png';

const Contact = () => {
  return (
    <main className="relative z-10 p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <div className="flex justify-center items-center space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="h-8 w-8" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="h-8 w-8" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" className="h-8 w-8" />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <img src={telegramIcon} alt="Telegram" className="h-8 w-8" />
        </a>
      </div>
    </main>
  );
};

export default Contact;
