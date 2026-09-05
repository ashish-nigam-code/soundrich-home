import Link from "next/link";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Content — sourced from soundrichhearing.com "Hearing Aid Price in  */
/*  India 2026" section                                                */
/* ------------------------------------------------------------------ */

const PHONE = { label: "+91 98112 24051", href: "tel:+919811224051" };

/* Brand-logo palette accents used to finish each price card */
const PRICE_TIERS = [
  {
    name: "Basic Digital Hearing Aids",
    price: "₹20,990 – ₹60,000",
    note: "Essential digital technology for clear everyday listening",
    badge: "Starts under ₹21,000",
    popular: false,
    theme: {
      bar: "from-[#35c3e8] via-brand to-brand-dark",
      chip: "bg-brand-soft text-brand-dark",
      chipDot: "bg-brand",
      price: "text-brand-dark",
      check: "text-brand",
      border: "hover:border-brand/40",
    },
  },
  {
    name: "Mid Range Hearing Aids",
    price: "₹65,000 – ₹2,00,000",
    note: "Smarter sound processing with rechargeable & Bluetooth models",
    badge: "Most Popular",
    popular: true,
    theme: {
      bar: "from-[#8fd15f] via-accent to-[#3c8a2a]",
      chip: "bg-gradient-to-r from-accent to-[#3c8a2a] text-white",
      chipDot: "bg-white",
      price: "text-[#2f7d1e]",
      check: "text-accent",
      border: "border-accent/35 ring-2 ring-accent/25",
    },
  },
  {
    name: "Premium Hearing Aids",
    price: "₹3,00,000 – ₹7,99,990",
    note: "Flagship technology with the most advanced sound quality",
    badge: "Latest Technology",
    popular: false,
    theme: {
      bar: "from-[#0d75c9] to-[#003a70]",
      chip: "bg-[#e3f0fa] text-[#0b5394]",
      chipDot: "bg-[#0d75c9]",
      price: "text-[#0b5394]",
      check: "text-[#0d75c9]",
      border: "hover:border-[#0d75c9]/40",
    },
  },
];

const PERKS = [
  { label: "Easy EMI — 6 to 24 months", icon: "emi" },
  { label: "Credit & Debit card EMI", icon: "card" },
  { label: "Free hearing test", icon: "ear" },
  { label: "Free home trial", icon: "home" },
];

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function IconChat() {
  return (
    <svg
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
      <rect x="10.1" y="12.4" width="3.8" height="3.8" rx="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconStore() {
  return (
    <svg
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.78 0V9.69a48.844 48.844 0 0 0-3.25-6.5H6.75a.75.75 0 0 0-.75.75v12.75M21 21h-1.5m-13.5 0H3.36m2.64 0v-2.25"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 12.75h4.5" />
      <circle cx="4" cy="20" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconTag() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
    </svg>
  );
}

function IconCard() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
    </svg>
  );
}

function IconEar() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
    </svg>
  );
}

function IconHome() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg
      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

const PERK_ICONS: Record<string, () => ReactNode> = {
  emi: IconTag,
  card: IconCard,
  ear: IconEar,
  home: IconHome,
};

/* "It's easy to get started" — three color-coded steps */
const GET_STARTED = [
  {
    no: "1",
    Icon: IconChat,
    title: "Connect With Soundrich Hearing",
    body: (
      <p className="mt-2 text-sm leading-relaxed text-body">
        Chat now or call us at{" "}
        <a
          href={PHONE.href}
          className="text-base font-extrabold text-brand-dark transition-colors hover:text-brand"
        >
          {PHONE.label}
        </a>
      </p>
    ),
    cta: { label: "Call Now", href: PHONE.href },
    theme: {
      icon: "text-brand-dark",
      box: "border-brand/50",
      num: "bg-brand",
      link: "text-brand-dark hover:text-brand",
    },
  },
  {
    no: "2",
    Icon: IconCalendar,
    title: "Book a Free Hearing Test",
    body: (
      <p className="mt-2 text-sm leading-relaxed text-body">
        Our care executive will schedule your appointment at the clinic or your home.
      </p>
    ),
    cta: { label: "Book Free Test", href: "/contact-us" },
    theme: {
      icon: "text-[#3c8a2a]",
      box: "border-accent/60",
      num: "bg-accent",
      link: "text-[#2f7d1e] hover:text-accent",
    },
  },
  {
    no: "3",
    Icon: IconStore,
    title: "Meet an Expert Audiologist",
    body: (
      <p className="mt-2 text-sm leading-relaxed text-body">
        Visit our nearest clinic and get a personalised hearing solution fitted for you.
      </p>
    ),
    cta: { label: "Find Local Clinic", href: "/location" },
    theme: {
      icon: "text-[#0b5394]",
      box: "border-[#0d75c9]/60",
      num: "bg-[#0d75c9]",
      link: "text-[#0b5394] hover:text-[#0d75c9]",
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export default function PriceSection() {
  return (
    <section
      id="hearing-aid-price-in-india"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Header ---------- */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-soft px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-brand-dark uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            Transparent Pricing · No Hidden Costs
          </span>
          <h2 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-heading sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Hearing Aid Price in India <span className="text-brand-dark">2026</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
            Hearing aid prices in India 2026 vary based on brand, technology and the level of
            hearing loss. At Soundrich Hearing, digital hearing aids start from{" "}
            <strong className="font-semibold text-brand-dark">₹20,990 per ear</strong> — with easy
            EMI, a free hearing test and a free home trial.
          </p>
        </div>

        {/* ---------- Price tier cards ---------- */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {PRICE_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                tier.popular
                  ? `${tier.theme.border} shadow-lg`
                  : `border-slate-200 ${tier.theme.border}`
              }`}
            >
              {/* brand-colored top bar */}
              <span
                className={`block h-1.5 w-full bg-linear-to-r ${tier.theme.bar}`}
                aria-hidden="true"
              />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span
                  className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[0.65rem] font-bold tracking-[0.14em] uppercase ${tier.theme.chip}`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${tier.theme.chipDot}`}
                    aria-hidden="true"
                  />
                  {tier.badge}
                </span>
                <h3 className="mt-4 text-lg font-bold text-heading">{tier.name}</h3>

                <p className={`mt-4 text-3xl leading-none font-extrabold tracking-tight lg:text-[2rem] ${tier.theme.price}`}>
                  {tier.price}
                </p>
                <p className="mt-2 text-xs font-semibold tracking-widest text-body/70 uppercase">
                  per pair
                </p>

                <div className="mt-5 flex-1 border-t border-dashed border-slate-200 pt-5">
                  <p className="flex items-start gap-2 text-sm leading-relaxed text-body">
                    <span className={`mt-0.5 ${tier.theme.check}`}>
                      <CheckIcon />
                    </span>
                    {tier.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- Perks / EMI strip ---------- */}
        <div className="mt-10 flex flex-col items-center justify-center gap-x-8 gap-y-4 rounded-2xl border border-slate-200 bg-neutral-primary px-6 py-6 sm:flex-row sm:flex-wrap">
          {PERKS.map((perk) => {
            const Icon = PERK_ICONS[perk.icon];
            return (
              <div key={perk.label} className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand-dark shadow-sm ring-1 ring-slate-200">
                  <Icon />
                </span>
                <span className="text-sm font-semibold text-heading">{perk.label}</span>
              </div>
            );
          })}
        </div>

        {/* ---------- Easy to get started (3 steps) ---------- */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-brand-dark sm:text-3xl lg:text-[2rem]">
            It&apos;s easy to get started
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-body sm:text-base">
            Three simple steps between you and better hearing.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-y-0 md:divide-x md:divide-dotted md:divide-slate-300">
            {GET_STARTED.map((step) => (
              <div
                key={step.no}
                className="flex flex-col items-center px-4 text-center md:px-8"
              >
                <span
                  className={`relative flex h-16 w-16 items-center justify-center rounded-[15px] border-2 bg-white shadow-sm transition-transform duration-300 hover:scale-105 ${step.theme.box}`}
                >
                  <span className={`block ${step.theme.icon}`}>
                    <step.Icon />
                  </span>
                  <span
                    className={`absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full text-[0.7rem] font-extrabold text-white shadow-md ring-2 ring-white ${step.theme.num}`}
                  >
                    {step.no}
                  </span>
                </span>

                <h3 className="mt-5 text-lg font-bold text-heading">{step.title}</h3>
                {step.body}

                {step.cta.href.startsWith("tel:") ? (
                  <a
                    href={step.cta.href}
                    className={`group mt-4 inline-flex items-center gap-1.5 text-sm font-bold ${step.theme.link}`}
                  >
                    {step.cta.label}
                    <IconArrow />
                  </a>
                ) : (
                  <Link
                    href={step.cta.href}
                    className={`group mt-4 inline-flex items-center gap-1.5 text-sm font-bold ${step.theme.link}`}
                  >
                    {step.cta.label}
                    <IconArrow />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
