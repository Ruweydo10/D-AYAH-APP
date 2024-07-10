import React, { useState, useEffect, useRef } from 'react';
import audio1 from '../assets/audios/al-naas.mp3';
import audio2 from '../assets/audios/al-falaq.mp3';
import audio3 from '../assets/audios/al-ikhlas.mp3';
const audios = [
  { 
    src: audio1, 
    surah: 'Surah An-Naas', 
    verse: 'Verse 6', 
    text: [
      'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
      'Say, “I seek refuge in the Lord of mankind,',
      'The Sovereign of mankind,',
      'From the evil of the retreating whisperer,',
      'Who whispers [evil] into the breasts of mankind,”'
    ]
  },
  { 
    src: audio2, 
    surah: 'Surah Al-Falaq', 
    verse: 'Verse 5', 
    text: [
      'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
      'Say, “I seek refuge in the Lord of daybreak,',
      'From the evil of that which He created,',
      'And from the evil of darkness when it settles,',
      'And from the evil of the blowers in knots,”'
    ]
  },
  { 
    src: audio3, 
    surah: 'Surah Al-Ikhlas', 
    verse: '',
    text: [
      'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
      'Say, “He is Allah, [who is] One,',
      'Allah, the Eternal Refuge.',
      'He neither begets nor is born,',
      'Nor is there to Him any equivalent.”'
    ]
  },
];

const getRandomAudio = () => {
  return Math.floor(Math.random() * audios.length);
};

const AudioPlayer = ({ setCurrentAudioDetails }) => {
  const [currentAudio, setCurrentAudio] = useState(getRandomAudio());
  const audioRef = useRef(null);

  useEffect(() => {
    setCurrentAudioDetails(audios[currentAudio]);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentAudio, setCurrentAudioDetails]);

  const nextAudio = () => {
    setCurrentAudio(getRandomAudio());
  };

  return (
    <div className="text-center flex flex-col items-center">
      <audio ref={audioRef} controls className="mb-4">
        <source src={audios[currentAudio].src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button
        onClick={nextAudio}
        className={`p-2 rounded-full bg-gray-200 text-black transition-colors`}
      >
        Next
      </button>
    </div>
  );
};

export default AudioPlayer;
