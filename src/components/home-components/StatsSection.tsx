import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  White line icons — style matched to the reference design           */
/* ------------------------------------------------------------------ */

const iconProps = {
  className: "h-10 w-10",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function IconClinic() {
  return (
    <svg {...iconProps}>
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
      <path d="M2 22h20" />
      <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2" />
      <path d="M12 6v4" />
      <path d="M14 14h-4" />
      <path d="M14 8h-4" />
    </svg>
  );
}

function IconAudiologist() {
  return (
    <svg {...iconProps}>
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );
}

function IconTrophy() {
  return (
    <svg {...iconProps}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function IconHearingAids() {
  return (
    <svg {...iconProps}>
      <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
      <path d="M10.5 9.5a2 2 0 0 1 4 .4" />
    </svg>
  );
}

function IconThumbsUp() {
  return (
    <svg {...iconProps}>
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function IconMedal() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Stats content — layout & copy follow the reference design          */
/* ------------------------------------------------------------------ */

const STATS = [
  { icon: IconClinic, value: "75+", label: "Clinics Across India" },
  { icon: IconAudiologist, value: "100+", label: "Expert Audiologists" },
  { icon: IconTrophy, value: "15+", label: "Years of Experience" },
  { icon: IconHearingAids, value: "500+", label: "Hearing Aids Models" },
  { icon: IconThumbsUp, value: "3 Lakh+", label: "Satisfied Customers" },
  { icon: IconMedal, value: "2 Years", label: "Extended Warranty" },
];

export default function StatsSection() {
  return (
    <section
      id="why-soundrich"
      className="relative overflow-hidden bg-[#0a1c33] py-16 sm:py-20 lg:py-24"
    >
      {/* Background — Phonak product lineup image, heavily dimmed */}
      <Image
        src="/assets/images/2020_TH19-LandingPage-Lineup.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
        aria-hidden="true"
      />
      {/* Navy overlay so white text stays readable */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0a1c33]/90 via-[#0a1c33]/70 to-[#0a1c33]/90"
        aria-hidden="true"
      />
      {/* Subtle dotted digital texture */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="mx-auto max-w-3xl text-center text-2xl leading-snug font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          Why Soundrich Hearing is the Best Hearing Aids Provider?
        </h2>

        {/* Stats grid — 2 rows × 3 columns on desktop */}
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <span className="shrink-0 text-white">
                <stat.icon />
              </span>
              <div>
                <p className="text-xl leading-none font-extrabold tracking-tight text-white sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-white/75">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}