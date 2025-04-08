'use client'
import React, { useState, useRef, useEffect } from 'react'
import WaveSurfer from 'wavesurfer.js'
import { FaPlay, FaPause, FaSpinner } from 'react-icons/fa'

interface AudioPlayerProps {
  ambientSrc: string
  songArtistTitle: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  ambientSrc,
  songArtistTitle,
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const waveformRef = useRef<HTMLDivElement | null>(null)
  const wavesurfer = useRef<WaveSurfer | null>(null)

  // Initialize WaveSurfer
  useEffect(() => {
    if (waveformRef.current) {
      setIsLoading(true)
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#A0AEC0',
        progressColor: '#4A5568',
        cursorColor: '#2D3748',
        barWidth: 2,
        barRadius: 3,
        height: 100,
        normalize: true,
      })

      wavesurfer.current.load(ambientSrc)

      wavesurfer.current.on('ready', () => {
        setIsLoading(false)
        wavesurfer.current?.setVolume(1) // Set fixed volume
      })

      wavesurfer.current.on('play', () => setIsPlaying(true))
      wavesurfer.current.on('pause', () => setIsPlaying(false))
      wavesurfer.current.on('finish', () => {
        wavesurfer.current?.play() // Loop on finish
      })

      wavesurfer.current.on('error', (err) => {
        console.error('WaveSurfer error:', err)
        setIsLoading(false)
      })

      return () => {
        wavesurfer.current?.destroy()
      }
    }
  }, [ambientSrc])

  // Sync playback
  useEffect(() => {
    if (wavesurfer.current) {
      if (isPlaying) {
        wavesurfer.current.play()
      } else {
        wavesurfer.current.pause()
      }
    }
  }, [isPlaying])

  const togglePlayPause = () => setIsPlaying(!isPlaying)

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
      <div className="flex items-center justify-center">
        <button
          onClick={togglePlayPause}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer"
          aria-label={isPlaying ? 'Pause' : 'Play'}
          disabled={isLoading}
        >
          {isPlaying ? (
            <FaPause className="text-gray-700" />
          ) : (
            <FaPlay className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Label */}
      <p className="text-center text-sm text-gray-500 mt-2">
        {songArtistTitle}
      </p>
    </div>
  )
}

export default AudioPlayer
