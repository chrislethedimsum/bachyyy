"use client";

import { useRef, useState, useEffect } from "react";

export default function IntroOverlay() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [entered, setEntered] = useState(false);
  // DVD-style bouncing refs
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dvdRef = useRef<HTMLButtonElement | null>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const xVel = useRef(1);
  const yVel = useRef(1);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    if (entered) return;
    const dvd = dvdRef.current;
    const container = containerRef.current;
    if (!dvd || !container) return;

    // place in center initially
    const placeInitial = () => {
      const cont = container.getBoundingClientRect();
      const el = dvd.getBoundingClientRect();
      xRef.current = Math.max(0, (cont.width - el.width) / 2);
      yRef.current = Math.max(0, (cont.height - el.height) / 2);
      dvd.style.left = `${xRef.current}px`;
      dvd.style.top = `${yRef.current}px`;
    };

    placeInitial();

    function tint() {
      if (!dvd) return;
      const deg = Math.random() * 360;
      dvd.style.filter = `sepia(100%) saturate(600%) brightness(90%) hue-rotate(${deg}deg)`;
    }

    function tick() {
      const cont = container.getBoundingClientRect();
      const rect = dvd.getBoundingClientRect();

      let nx = xRef.current + xVel.current;
      let ny = yRef.current + yVel.current;

      if (ny + rect.height >= cont.height) {
        yVel.current = -Math.abs(yVel.current);
        ny = cont.height - rect.height;
        tint();
      }
      if (ny <= 0) {
        yVel.current = Math.abs(yVel.current);
        ny = 0;
        tint();
      }
      if (nx + rect.width >= cont.width) {
        xVel.current = -Math.abs(xVel.current);
        nx = cont.width - rect.width;
        tint();
      }
      if (nx <= 0) {
        xVel.current = Math.abs(xVel.current);
        nx = 0;
        tint();
      }

      xRef.current = nx;
      yRef.current = ny;
      dvd.style.left = `${nx}px`;
      dvd.style.top = `${ny}px`;

      animRef.current = requestAnimationFrame(tick);
    }

    animRef.current = requestAnimationFrame(tick);

    const onResize = () => placeInitial();
    window.addEventListener("resize", onResize);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [entered]);

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
        className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-md transition-opacity duration-1000
        ${entered ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        {/* container for bouncing area */}
        <div ref={containerRef} className="relative w-full h-full">
          <button
            ref={dvdRef}
            onClick={handleEnter}
            // initial positioning will be set by effect
            style={{ position: "absolute", left: 0, top: 0 }}
            className="dvd group w-[140px] h-[180px] flex items-center justify-center"
          >
            {/* SVG shape (isometric ISO/JIS Enter) */}
            <svg
              viewBox="-8 -20 75 105"
              preserveAspectRatio="xMinYMid meet"
              className="w-30 h-40 transition-all duration-500"
            >
              <path
                d="M0 0 L50 0 L50 75 L10 75 L10 35 L0 35 L0 0 Z"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 fill-blue-600 stroke-white stroke-2"
              />
              <path
                d="M0 0 L10 -10 L60 -10 L50 0 L0 0 Z"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 fill-blue-500 stroke-white stroke-2"
              />
              <path
                d="M60 -10 L60 65 L50 75 L50 0 L60 -10 Z"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 fill-blue-700 stroke-white stroke-2"
              />
            </svg>

            <span className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
              ↵
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
