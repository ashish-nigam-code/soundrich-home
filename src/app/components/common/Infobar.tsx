import React from "react";

const OFFERS = [
  "Free Hearing Assessment",
  "Expert Hearing Aid Fitting",
  "Home Visit Services Available",
  "Premium Digital Hearing Aids",
  "100% Customer Satisfaction",
  "Hear Better, Live Better",
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.2 13.8-3.6-3.6 1.4-1.4 2.2 2.2 4.6-4.6 1.4 1.4-6 6Z" />
    </svg>
  );
}

function MarqueeRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-x-8 pr-8 sm:gap-x-12 sm:pr-12"
      aria-hidden={hidden || undefined}
    >
      {OFFERS.map((offer) => (
        <span
          key={offer}
          className="flex items-center gap-2 text-base font-medium text-white/95"
        >
          <CheckIcon className="h-4 w-4 shrink-0 text-white/80" />
          {offer}
        </span>
      ))}
    </div>
  );
}

export default function Infobar() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#57a03e] via-accent to-[#57a03e] py-2 shadow-sm">
      <div className="flex w-max animate-marquee whitespace-nowrap hover:[animation-play-state:paused] motion-reduce:animate-none">
        <MarqueeRow />
        <MarqueeRow hidden />
      </div>
    </div>
  );
}