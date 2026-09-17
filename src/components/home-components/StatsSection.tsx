/* ------------------------------------------------------------------ */
/*  Trust marquee — items scroll right to left, icons match each text  */
/* ------------------------------------------------------------------ */

function IconClients() {
  return (
    <svg className="h-6 w-6 shrink-0 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconLocations() {
  return (
    <svg className="h-6 w-6 shrink-0 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconAudiologists() {
  return (
    <svg className="h-6 w-6 shrink-0 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
      <path d="M10.5 9.5a2 2 0 0 1 4 .4" />
    </svg>
  );
}

function IconHomeVisit() {
  return (
    <svg className="h-6 w-6 shrink-0 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 10.5 9-7.5 9 7.5" />
      <path d="M5 10v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9" />
      <path d="M10 21v-6h4v6" />
    </svg>
  );
}

function IconFreeTest() {
  return (
    <svg className="h-6 w-6 shrink-0 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function IconEmi() {
  return (
    <svg className="h-6 w-6 shrink-0 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <path d="M6 15h4" />
    </svg>
  );
}

const TRUST_ITEMS = [
  { icon: IconClients, text: "50,000+ Happy Clients" },
  { icon: IconLocations, text: "10+ Locations" },
  { icon: IconAudiologists, text: "Experienced Audiologists" },
  { icon: IconHomeVisit, text: "Home Visits Available" },
  { icon: IconFreeTest, text: "Free Hearing Test" },
  { icon: IconEmi, text: "Easy EMI Options" },
];

/* Repeat enough times that one row is always wider than the viewport */
const ROW_ITEMS = [...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS];

function MarqueeRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-x-10 pr-10 sm:gap-x-14 sm:pr-14"
      aria-hidden={hidden || undefined}
    >
      {ROW_ITEMS.map((item, index) => (
        <div key={`${item.text}-${index}`} className="flex items-center gap-x-2.5 sm:gap-x-3">
          <item.icon />
          <span className="whitespace-nowrap text-base font-medium text-slate-800 sm:text-lg">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section
      id="why-soundrich"
      aria-label="Soundrich Hearing trust highlights"
      className="relative overflow-hidden border-y border-slate-100 bg-white py-5 sm:py-6"
    >
      <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] motion-reduce:animate-none">
        <MarqueeRow />
        <MarqueeRow hidden />
      </div>
    </section>
  );
}
