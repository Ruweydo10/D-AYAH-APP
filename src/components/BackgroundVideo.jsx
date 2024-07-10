import React, { useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import dayVideo from '../assets/videos/sun2.mp4';
import nightVideo from '../assets/videos/night-moon.mp4';

const BackgroundVideo = () => {
  const { isDay } = useTheme();
  const dayVideoRef = useRef(null);
  const nightVideoRef = useRef(null);

  useEffect(() => {
    if (isDay) {
      if (dayVideoRef.current) {
        dayVideoRef.current.currentTime = 0;
        dayVideoRef.current.play();
      }
      if (nightVideoRef.current) {
        nightVideoRef.current.pause();
      }
    } else {
      if (nightVideoRef.current) {
        nightVideoRef.current.currentTime = 0;
        nightVideoRef.current.play();
      }
      if (dayVideoRef.current) {
        dayVideoRef.current.pause();
      }
    }
  }, [isDay]);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <video
        ref={dayVideoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isDay ? 'opacity-100' : 'opacity-0'}`}
        autoPlay
        loop
        muted
        src={dayVideo}
      />
      <video
        ref={nightVideoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isDay ? 'opacity-0' : 'opacity-100'}`}
        autoPlay
        loop
        muted
        src={nightVideo}
      />
    </div>
  );
};

export default BackgroundVideo;
