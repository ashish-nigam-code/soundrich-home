/* Feature icons — each matches its feature title */

const IconAward = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const IconEarCheck = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
    <path d="M10.5 9.5a2 2 0 0 1 4 .4" />
    <path d="m17 2 1.5 1.5L21 1" />
  </svg>
);

const IconZap = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const IconCard = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
    <path d="M6 15h4" />
  </svg>
);

const IconShieldCheck = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconBadgeCheck = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

/* Colour-coded chip groups — people & care (blue), value (green), product & trust (deep blue) */

const FEATURES = [
  {
    icon: IconAward,
    chipClass: "bg-brand/10 text-brand",
    title: "Expert Audiology Care",
    text: "Professional guidance from experienced hearing-care specialists.",
  },
  {
    icon: IconEarCheck,
    chipClass: "bg-accent/15 text-accent",
    title: "Free Hearing Test & Trial",
    text: "Start your hearing-care journey with an assessment and solution trial.",
  },
  {
    icon: IconZap,
    chipClass: "bg-brand-dark/10 text-brand-dark",
    title: "Personalized Hearing Solutions",
    text: "Recommendations based on your hearing needs, lifestyle and comfort.",
  },
  {
    icon: IconCard,
    chipClass: "bg-accent/15 text-accent",
    title: "Home Visit Available",
    text: "Convenient hearing-care support at home, where available.",
  },
  {
    icon: IconShieldCheck,
    chipClass: "bg-brand-dark/10 text-brand-dark",
    title: "Flexible Payment Options",
    text: "Make the right hearing solution easier to access.",
  },
  {
    icon: IconBadgeCheck,
    chipClass: "bg-brand/10 text-brand",
    title: "After-Sales Support",
    text: "Ongoing guidance, service and support after your purchase.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header — left aligned */}
        <div className="max-w-3xl text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-brand-dark uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Why Us
          </span>
          <h2 className="mt-5 text-3xl leading-tight font-extrabold text-heading sm:text-4xl lg:text-[2.65rem]">
            Why Choose {" "}
            <span className="text-brand-dark underline decoration-accent/70 decoration-4 underline-offset-8">
              Soundrich Hearing ?
            </span>
          </h2>
          <p className="mt-5 leading-relaxed text-body">
            Ten-plus years, thousands of happy patients and one simple promise —
            hearing care that&apos;s honest, affordable and truly personal.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 hover:ring-brand/30"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${feature.chipClass}`}
              >
                <feature.icon />
              </span>
              <h3 className="mt-4 text-base leading-snug font-bold text-heading">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
