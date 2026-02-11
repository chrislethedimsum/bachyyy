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
      <audio ref={audioRef} src="/audio/34953_080226_rockman.mp3" loop />

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center 
        bg-black/80 backdrop-blur-md transition-opacity duration-1000
        ${entered ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <button
  onClick={handleEnter}
  className="relative w-[320px] h-[180px] 
             flex items-center justify-center group"
>
          {/* SVG shape */}
          <svg
  viewBox="0 -20 100 120"
  preserveAspectRatio="xMidYMid meet"
  className="w-50 h-50 transition-all duration-500"
>
            <path
              d="M0 0 L50 0 L50 75 L10 75 L10 35 L0 35 L0 0 Z"
               strokeLinecap="round"
  strokeLinejoin="round"
              className="transition-all duration-500 
                         fill-grey-300
                         stroke-white 
                         stroke-2
                         group-hover:fill-white opacity-80 
                         group-hover:stroke-black"
            />
            <path
              d="M0 0 L10 -10 L60 -10 L50 0 L0 0 Z"
               strokeLinecap="round"
  strokeLinejoin="round"
              className="transition-all duration-500 
                         fill-transparent 
                         stroke-white 
                         stroke-2
                         group-hover:fill-white 
                         group-hover:stroke-black"
            />
            <path
              d="M60 -10 L60 65 L50 75 L50 0 L60 -10 Z"
               strokeLinecap="round"
  strokeLinejoin="round"
              className="transition-all duration-500 
                         fill-transparent 
                         stroke-white 
                         stroke-2
                         group-hover:fill-white 
                         group-hover:stroke-black"
            />
          </svg>

          {/* Text */}
          <span
            className="absolute inset-0 flex items-center justify-center 
                       text-white text-lg tracking-widest 
                       transition duration-500 
                       group-hover:text-black right-15 bottom-10"
          >
            ↵
          </span>
        </button>
      </div>
    </>
  );
}
