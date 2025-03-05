'use client';
import React, { useState } from 'react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [volume, setVolume] = useState(50);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl mb-4">Settings</h2>
        <label className="block mb-2">
          Volume:
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full"
          />
        </label>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;