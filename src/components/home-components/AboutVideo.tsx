"use client";

import { useCallback, useRef, useState } from "react";

export default function AboutVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(true);

  const toggle = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }, []);

  return (
    <div className="group relative mx-auto h-full w-full max-w-xl overflow-hidden bg-slate-900 lg:max-w-none rounded-3xl">
      <div className="relative h-full min-h-[280px] w-full">
        <video
          ref={videoRef}
          src="/assets/images/video.mp4"
          poster="/assets/images/Soundrich-Hearing.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onClick={toggle}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="absolute inset-0 h-full w-full cursor-pointer object-cover"
          aria-label="Video about Soundrich Hearing hearing care services"
        />

        {/* Play / Pause — centered glass control */}
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause video" : "Play video"}
          className={`absolute top-1/2 left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/25 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-brand hover:bg-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-20 sm:w-20 ${
            playing
              ? "opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
              : "scale-100 opacity-100"
          }`}
        >
          {playing ? (
            <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" rx="1.2" />
              <rect x="14" y="5" width="4" height="14" rx="1.2" />
            </svg>
          ) : (
            <svg className="h-7 w-7 translate-x-0.5 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5.5v13a1 1 0 0 0 1.53.85l10.2-6.5a1 1 0 0 0 0-1.7L9.53 4.65A1 1 0 0 0 8 5.5Z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
