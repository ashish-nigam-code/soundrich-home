"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    image: "/assets/images/signia-n-bnr.jpg",
    eyebrow: "Welcome to Soundrich Hearing",
    title: "Hear Better, Live Better",
    description:
      "Premium digital hearing aids fitted by expert audiologists. Start with a free hearing assessment at your nearest Soundrich clinic.",
  },
  {
    image: "/assets/images/tresound-bnr.jpg",
    eyebrow: "Free Hearing Assessment",
    title: "Reconnect With the Sounds You Love",
    description:
      "A comprehensive hearing test with our expert audiologists and a personalised care plan — absolutely free, no obligations.",
  },
  {
    image: "/assets/images/widex-.jpg",
    eyebrow: "Home Visit Services",
    title: "Expert Hearing Care at Your Doorstep",
    description:
      "Can't visit us? Our audiologists come to you — home visit hearing tests and hearing aid fitting across Delhi NCR.",
  },
  {
    image: "/assets/images/banner5.webp",
    eyebrow: "Premium Hearing Aids",
    title: "World-Class Hearing Aid Brands",
    description:
      "We stock leading international brands — Phonak, Oticon, Signia, Resound and more — with trial, fitting and complete aftercare.",
  },
  {
    image: "/assets/images/phonak-n-bnr.jpg",
    eyebrow: "100% Customer Satisfaction",
    title: "Live Loud, Live Clear",
    description:
      "Discreet, rechargeable, Bluetooth-enabled hearing aids designed for your lifestyle. Try before you buy.",
  },
];

const AUTOPLAY_MS = 6000;

export default function SliderSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % SLIDES.length) + SLIDES.length) % SLIDES.length);
    },
    []
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-900"
      aria-label="Soundrich Hearing highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="relative h-[520px] sm:h-[600px] lg:h-[640px]">
        {SLIDES.map((slide, index) => {
          const isActive = index === active;
          return (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                isActive ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="100vw"
                priority={index === 0}
                className={`object-cover transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-110" : "scale-100"
                }`}
              />
              {/* Gradient overlay — strongest bottom-left for readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-slate-950/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />
            </div>
          );
        })}

        {/* Content — bottom left */}
        <div className="absolute inset-0 z-10 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8">
            {SLIDES.map((slide, index) => {
              const isActive = index === active;
              return (
                <div
                  key={slide.title}
                  className={`max-w-2xl transition-all duration-700 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none absolute translate-y-6 opacity-0"
                  }`}
                  aria-hidden={!isActive}
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {slide.eyebrow}
                  </span>
                  <h1 className="mt-4 text-4xl leading-tight font-bold text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
                    {slide.description}
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/40 transition-all hover:bg-brand-dark hover:shadow-brand-dark/40"
                    >
                      Book Free Hearing Test
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                    <Link
                      href="/hearing-aid"
                      className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-brand-dark"
                    >
                      Explore Hearing Aids
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute top-1/2 left-3 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-brand sm:flex lg:left-6"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute top-1/2 right-3 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-brand sm:flex lg:right-6"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === active ? "w-8 bg-brand" : "w-2.5 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* Autoplay progress bar */}
        <div className="absolute right-0 bottom-0 left-0 z-20 h-1 bg-white/20">
          <div
            key={active}
            className="h-full origin-left bg-brand"
            style={{
              animation: paused
                ? "none"
                : `slider-progress ${AUTOPLAY_MS}ms linear forwards`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
