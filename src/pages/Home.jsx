import React, { useState } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
  const { isDay } = useTheme();
  const [currentAudioDetails, setCurrentAudioDetails] = useState(null);

  const showAlert = (message) => {
    alert(message);
  };

  return (
    <main className={`relative z-10 p-4 text-center flex flex-col items-center ${isDay ? 'text-black' : 'text-white'}`}>
      <h1 className="text-2xl font-bold mb-4">Dily Quran Verses App</h1>
      {currentAudioDetails && (
        <>
          <h2 className="text-xl mb-2">{currentAudioDetails.surah}</h2>
          <h3 className="text-lg mb-2">{currentAudioDetails.verse}</h3>
          <div className={`mb-4 p-4 rounded shadow-lg ${isDay ? 'bg-white text-black' : 'bg-gray-800 text-white'} bg-opacity-50 w-full md:w-3/4 lg:w-1/2`}>
            {Array.isArray(currentAudioDetails.text) ? (
              currentAudioDetails.text.map((line, index) => (
                <p key={index} className="mb-2">{line}</p>
              ))
            ) : (
              <p>{currentAudioDetails.text}</p>
            )}
          </div>
        </>
      )}
      <div className="w-full flex justify-center mb-8">
        <AudioPlayer isDay={isDay} setCurrentAudioDetails={setCurrentAudioDetails} />
      </div>
      <div className="w-full flex justify-center md:justify-end space-x-4 mb-4">
        <button
          onClick={() => showAlert('Added to Chrome')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer"
        >
          ADD TO CHROME
        </button>
        <button
          onClick={() => showAlert('Subscribed, thank you!')}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors cursor-pointer"
        >
          SUBSCRIBE
        </button>
      </div>
    </main>
  );
};

export default Home;
