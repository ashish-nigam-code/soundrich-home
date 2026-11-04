"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    image: "/assets/images/landingpageimages/herobanner1.jpeg",
    title: "Better Hearing Starts With the Right Care.",
    description:
      "Premium digital hearing aids fitted by expert audiologists. Start with a free hearing assessment at your nearest Soundrich clinic.",
  },
  {
    image: "/assets/images/landingpageimages/herobanner2.jpeg",
    title: "Better Hearing Starts With the Right Care.",
    description:
      "A comprehensive hearing test with our expert audiologists and a personalised care plan — absolutely free, no obligations.",
  },
  {
    image: "/assets/images/landingpageimages/herobanner1.jpeg",
    title: "Better Hearing Starts With the Right Care.",
    description:
      "Can't visit us? Our audiologists come to you — home visit hearing tests and hearing aid fitting across Delhi NCR.",
  },
  {
    image: "/assets/images/landingpageimages/herobanner2.jpeg",
    title: "Better Hearing Starts With the Right Care.",
    description:
      "We stock leading international brands — Phonak, Oticon, Signia, Resound and more — with trial, fitting and complete aftercare.",
  },
  {
    image: "/assets/images/landingpageimages/herobanner1.jpeg",
    title: "Better Hearing Starts With the Right Care.",
    description:
      "Discreet, rechargeable, Bluetooth-enabled hearing aids designed for your lifestyle. Try before you buy.",
  },
];

/* Track = [clone of last, ...real slides, clone of first] → seamless right-to-left loop */
const TRACK = [
  { ...SLIDES[SLIDES.length - 1], key: "clone-last" },
  ...SLIDES.map((slide, index) => ({ ...slide, key: `slide-${index}` })),
  { ...SLIDES[0], key: "clone-first" },
];

const SLIDE_TRANSITION_MS = 700;
const AUTOPLAY_MS = 2000;

export default function SliderSection() {
  const [position, setPosition] = useState(1); // index within TRACK (1 = first real slide)
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const jumpingRef = useRef(false);
  const jumpTimeoutRef = useRef<number | null>(null);

  const active = (position - 1 + SLIDES.length) % SLIDES.length;

  /* After sliding onto an edge clone, silently snap to the matching real slide */
  const scheduleJump = useCallback((clonePosition: number) => {
    if (jumpTimeoutRef.current) window.clearTimeout(jumpTimeoutRef.current);
    jumpingRef.current = true;
    jumpTimeoutRef.current = window.setTimeout(
      () => {
        setAnimate(false);
        setPosition(clonePosition === 0 ? TRACK.length - 2 : 1);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            jumpingRef.current = false;
            setAnimate(true);
          });
        });
      },
      SLIDE_TRANSITION_MS + 60
    );
  }, []);

  const slideTo = useCallback(
    (next: number) => {
      if (jumpingRef.current) return;
      setAnimate(true);
      setPosition(next);
      if (next === 0 || next === TRACK.length - 1) scheduleJump(next);
    },
    [scheduleJump]
  );

  const next = useCallback(() => slideTo(position + 1), [position, slideTo]);
  const prev = useCallback(() => slideTo(position - 1), [position, slideTo]);

  /* Auto-slide right to left every 3000ms (pauses while hovering) */
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, next]);

  /* Cleanup pending jump on unmount */
  useEffect(() => {
    return () => {
      if (jumpTimeoutRef.current) window.clearTimeout(jumpTimeoutRef.current);
    };
  }, []);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    },
    [next, prev]
  );

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-brand"
      aria-label="Soundrich Hearing highlights"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides — horizontal track that moves right to left */}
      <div className="relative h-[520px] overflow-hidden sm:h-[600px] lg:h-[640px]">
        <div
          className={`flex h-full ${
            animate ? "transition-transform ease-in-out duration-700" : ""
          }`}
          style={{ transform: `translateX(-${position * 100}%)` }}
        >
          {TRACK.map((slide, index) => (
            <div
              key={slide.key}
              className="relative h-full w-full shrink-0"
              aria-hidden={index !== position}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="100vw"
                priority={slide.key === "slide-0"}
                loading="eager"
                className="object-cover"
              />
              {/* Gradient overlay — light, keeps banner visible while text stays readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Content — static overlay: same text/buttons on every slide, never changes while banners move */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="max-w-2xl text-4xl leading-[1.1] font-extrabold tracking-tight text-white drop-shadow-xl sm:text-5xl lg:text-6xl">
                Better Hearing Starts With the Right Care.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white drop-shadow-md [text-shadow:0_1px_8px_rgba(2,6,23,0.6)] sm:text-lg">
                Expert hearing care, personalized solutions and trusted hearing solutions for you and your family.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/40 transition-all hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-black/25"
                >
                  Book Free Hearing Test
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="tel:+91%2098112%2024051"
                  className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-brand-dark"
                >
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute top-1/2 left-3 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-brand lg:left-6"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute top-1/2 right-3 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-brand lg:right-6"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5">
          {SLIDES.map((slide, index) => (
            <button
              key={index}
              type="button"
              onClick={() => slideTo(index + 1)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === active ? "w-8 bg-brand" : "w-2.5 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
