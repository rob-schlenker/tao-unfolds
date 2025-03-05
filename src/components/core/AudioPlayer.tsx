'use client';
import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

interface AudioPlayerProps {
  audioSrc: string;
  ambientSrc: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc, ambientSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ambientRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current && ambientRef.current) {
      if (isPlaying) {
        audioRef.current.play();
        ambientRef.current.play();
        ambientRef.current.loop = true;
      } else {
        audioRef.current.pause();
        ambientRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="mt-4 flex justify-center items-center gap-4">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <audio ref={audioRef} src={audioSrc} />
      <audio ref={ambientRef} src={ambientSrc} />
    </div>
  );
};

export default AudioPlayer;