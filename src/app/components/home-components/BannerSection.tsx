import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const BLUE = "#008fc4";
const GREEN = "#64b348";
const CYAN = "#35c3e8";
const LIME = "#8fd15f";

const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/* Colored bubbles radiating from the center (brand row) toward the section edges */
const BUBBLES = [
  { size: 16, delay: 0.0, duration: "animate-bubble", color: BLUE, tx: "-34vw", ty: "-20vh" },
  { size: 12, delay: 1.1, duration: "animate-bubble-slow", color: GREEN, tx: "28vw", ty: "-22vh" },
  { size: 20, delay: 2.6, duration: "animate-bubble-slow", color: CYAN, tx: "-46vw", ty: "2vh" },
  { size: 13, delay: 0.7, duration: "animate-bubble", color: LIME, tx: "44vw", ty: "-8vh" },
  { size: 10, delay: 3.4, duration: "animate-bubble", color: GREEN, tx: "-24vw", ty: "22vh" },
  { size: 18, delay: 1.8, duration: "animate-bubble-slow", color: BLUE, tx: "20vw", ty: "26vh" },
  { size: 11, delay: 4.2, duration: "animate-bubble", color: CYAN, tx: "-40vw", ty: "-10vh" },
  { size: 15, delay: 0.4, duration: "animate-bubble-slow", color: GREEN, tx: "8vw", ty: "-28vh" },
  { size: 22, delay: 2.2, duration: "animate-bubble", color: BLUE, tx: "-10vw", ty: "-30vh" },
  { size: 12, delay: 5.0, duration: "animate-bubble-slow", color: LIME, tx: "36vw", ty: "14vh" },
  { size: 17, delay: 3.0, duration: "animate-bubble", color: CYAN, tx: "-16vw", ty: "-26vh" },
  { size: 14, delay: 6.2, duration: "animate-bubble-slow", color: GREEN, tx: "-30vw", ty: "12vh" },
  { size: 9, delay: 1.4, duration: "animate-bubble", color: BLUE, tx: "30vw", ty: "8vh" },
  { size: 19, delay: 4.8, duration: "animate-bubble-slow", color: CYAN, tx: "14vw", ty: "-14vh" },
];

/* Real partner logo images found in public/assets/images */
const BRANDS = [
  {
    name: "ReSound",
    image: "/assets/images/resound-logo-n-e1743074806172.png.bv.webp",
    width: 238,
    height: 109,
  },
  {
    name: "Widex",
    image: "/assets/images/widex-logo-n-e1743074623324.png.bv.webp",
    width: 300,
    height: 138,
  },
  {
    name: "Signia",
    image: "/assets/images/signialogo-n-e1743074660359.png.bv.webp",
    width: 289,
    height: 130,
  },
  {
    name: "Oticon",
    image: "/assets/images/oticonlogo-n-e1743074687949.png.bv.webp",
    width: 250,
    height: 128,
  },
];

export default function BannerSection() {
  return (
    <section
      id="book-free-test"
      className="relative overflow-hidden bg-brand-dark"
    >
      {/* Fixed banner background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/assets/images/banner5.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Semi-transparent dark overlay + vignette for a moody, readable backdrop */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/55 to-slate-950/85"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 70% at 50% 45%, transparent 0%, rgba(2,6,23,0.55) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ---- Colored bubbles radiating outward from the center ---- */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className={`absolute left-1/2 top-[22%] rounded-full ${b.duration} motion-reduce:animate-none`}
            style={
              {
                width: b.size,
                height: b.size,
                animationDelay: `${b.delay}s`,
                backgroundColor: b.color,
                boxShadow: `0 0 14px ${hexToRgba(b.color, 0.8)}, 0 0 32px ${hexToRgba(b.color, 0.35)}`,
                "--tx": b.tx,
                "--ty": b.ty,
              } as CSSProperties
            }
          />
        ))}
      </div>

      {/* ---- Content ---- */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-20 text-center sm:px-8 sm:py-24 lg:py-28">
        {/* 1. Brand partner logos row — all five partner images in one row */}
        <ul className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-12 lg:gap-x-14">
          {BRANDS.map((brand) => (
            <li key={brand.name}>
              <Image
                src={brand.image}
                alt={`${brand.name} logo — authorized partner of Soundrich Hearing`}
                width={brand.width}
                height={brand.height}
                className="h-11 w-auto object-contain drop-shadow-[0_2px_6px_rgba(2,6,23,0.5)] sm:h-14"
              />
            </li>
          ))}
          {/* Authorized Partner badge */}
          <li key="authorized-partner">
            <Image
              src="/assets/images/Authorized-Partner-e1743073929248.png.bv.webp"
              alt="Authorized Partner"
              width={270}
              height={112}
              className="h-11 w-auto object-contain drop-shadow-[0_2px_6px_rgba(2,6,23,0.5)] sm:h-14"
            />
          </li>
        </ul>

        {/* 2. Thin white divider */}
        <div
          className="mt-10 h-px w-52 bg-white/70 sm:mt-12 sm:w-64"
          aria-hidden="true"
        />

        {/* 3. Main heading */}
        <h2 className="mt-9 max-w-5xl text-[1.7rem] leading-[1.25] font-extrabold text-white sm:text-4xl sm:leading-[1.2] lg:text-[3.1rem] lg:leading-[1.18]">
          Hearing Solutions That Resolve All Your
          <br className="hidden sm:block" /> Hearing Problems.
        </h2>

        {/* 4. Subheading */}
        <p className="mt-5 text-base font-medium text-white/85 sm:text-lg lg:text-xl">
          …all in one place.
        </p>

        {/* 5. CTA button */}
        <Link
          href="/contact-us"
          className="group mt-10 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0d75c9] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#0d75c9]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0a66b3] hover:shadow-2xl hover:shadow-[#0d75c9]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
        >
          Get Ideal Hearing Aids From Renowned Brands
          <svg
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
