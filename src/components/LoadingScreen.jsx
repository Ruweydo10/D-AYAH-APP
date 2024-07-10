import React, { useEffect } from 'react';
import loadingImage from '../assets/images/quran-karim.png'; // replace with your loading image
import loadingVideo from '../assets/videos/loading-background.mp4'; // replace with your background video

const LoadingScreen = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded();
    }, 5000); // Adjust the duration as needed (5000ms = 5 seconds)

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-cover bg-center z-50">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        src={loadingVideo}
      />
      <div className="relative z-10 text-center">
        <h1 className="text-white text-2xl mb-4">Welcome, you are lucky to read the words of God</h1>
        <img src={loadingImage} alt="Loading" className="mb-4 w-25 h-25" /> {/* Adjusted size */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-2">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
          </div>
          <span className="text-white">Please wait a moment...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
