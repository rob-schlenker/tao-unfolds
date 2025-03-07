'use client';
import React, { useState, useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaSpinner } from 'react-icons/fa';

interface AudioPlayerProps {
  ambientSrc: string;
  songArtistTitle: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ ambientSrc, songArtistTitle }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);

  // Initialize WaveSurfer
  useEffect(() => {
    if (waveformRef.current) {
      setIsLoading(true);
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#A0AEC0',
        progressColor: '#4A5568',
        cursorColor: '#2D3748',
        barWidth: 2,
        barRadius: 3,
        height: 100,
        normalize: true,
        // Removed backend: 'MediaElement' to use WebAudio by default
      });

      wavesurfer.current.load(ambientSrc);

      wavesurfer.current.on('ready', () => {
        setIsLoading(false);
        wavesurfer.current?.setVolume(isMuted ? 0 : volume);
      });

      wavesurfer.current.on('play', () => setIsPlaying(true));
      wavesurfer.current.on('pause', () => setIsPlaying(false));
      wavesurfer.current.on('finish', () => {
        wavesurfer.current?.play(); // Loop on finish
      });

      wavesurfer.current.on('error', (err) => {
        console.error('WaveSurfer error:', err);
        setIsLoading(false);
      });

      return () => {
        wavesurfer.current?.destroy();
      };
    }
  }, [ambientSrc]);

  // Sync playback
  useEffect(() => {
    if (wavesurfer.current) {
      if (isPlaying) {
        wavesurfer.current.play();
      } else {
        wavesurfer.current.pause();
      }
    }
  }, [isPlaying, volume, isMuted]);

  // Handle volume and mute
  useEffect(() => {
    if (wavesurfer.current) {
      wavesurfer.current.setVolume(isMuted ? 0 : volume);
    }
  }, [volume, isMuted]);

  const togglePlayPause = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
      {/* Waveform with Loading Indicator */}
      <div className="relative w-full mb-4">
        <div ref={waveformRef} className="w-full h-[100px]" />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75">
            <FaSpinner className="text-gray-500 text-2xl animate-spin" />
            <span className="ml-2 text-gray-500">Loading audio...</span>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={togglePlayPause}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label={isPlaying ? 'Pause' : 'Play'}
          disabled={isLoading}
        >
          {isPlaying ? <FaPause className="text-gray-700" /> : <FaPlay className="text-gray-700" />}
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <FaVolumeMute className="text-gray-700" /> : <FaVolumeUp className="text-gray-700" />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              setVolume(parseFloat(e.target.value));
              setIsMuted(false);
            }}
            className="w-24 accent-gray-500"
            disabled={isMuted}
            aria-label="Volume"
          />
        </div>
      </div>

      {/* Label (no <audio> element needed) */}
      <p className="text-center text-sm text-gray-500 mt-2">{songArtistTitle}</p>
    </div>
  );
};

export default AudioPlayer;