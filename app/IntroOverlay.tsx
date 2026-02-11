"use client";

import { useRef, useState } from "react";

export default function IntroOverlay() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [entered, setEntered] = useState(false);

  const handleEnter = async () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0;
      await audio.play();

      // fade in âm thanh
      let vol = 0;
      const fade = setInterval(() => {
        if (vol < 0.6) {
          vol += 0.05;
          audio.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 150);
    }

    setEntered(true);
  };

  return (
    <>
      {/* Audio */}
      <audio
        ref={audioRef}
        src="/audio/34953_080226_rockman.mp3"
        loop
      />

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center 
        bg-black/80 backdrop-blur-md transition-opacity duration-1000
        ${entered ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <button
          onClick={handleEnter}
          className="text-white text-2xl tracking-widest border border-white px-10 py-4 hover:bg-white hover:text-black transition duration-500"
        >
          ENTER
        </button>
      </div>
    </>
  );
}
