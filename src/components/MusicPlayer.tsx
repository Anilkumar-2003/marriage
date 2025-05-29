// src/components/MusicPlayer.tsx
import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react'; // Optional icon library

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch(err => {
        console.log("Autoplay blocked:", err.message);
      });
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio
        ref={audioRef}
        src="https://docs.google.com/uc?export=download&id=1EsbxrXGMJ5QCOPjNo9L5YzOUwXCNNDRn"
        autoPlay
        loop
      />
      <button
        onClick={toggleMute}
        className="bg-white text-primary p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </div>
  );
};

export default MusicPlayer;
