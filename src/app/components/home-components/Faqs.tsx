"use client";

import Link from "next/link";
import { useState } from "react";

const FAQS = [
  {
    q: "Is the hearing test really free?",
    a: "Yes. The hearing test is completely free — at any of our centres across Delhi NCR or through a home visit. There is no obligation to buy, and our audiologists will explain your results in simple language.",
  },
  {
    q: "How much do hearing aids cost in India in 2026?",
    a: "Digital hearing aids at Soundrich start from ₹20,990 per ear. For a pair: Basic aids range from ₹20,990 – ₹60,000, Mid-range from ₹65,000 – ₹2,00,000, and Premium from ₹3,00,000 – ₹7,99,990. The right price depends on your hearing loss level, lifestyle and the technology you choose.",
  },
  {
    q: "Do you offer EMI or easy payment options?",
    a: "Yes — we offer easy EMI from 6 to 24 months on both debit and credit cards, so you can choose a premium hearing aid that fits your budget comfortably.",
  },
  {
    q: "Can I try a hearing aid before buying it?",
    a: "Absolutely. We offer a free trial at home or in the clinic, so you can experience the difference in real-life situations before you decide. If it isn't right for you, simply return it — no questions asked.",
  },
  {
    q: "Which hearing aid brands do you offer?",
    a: "We are an authorised partner for the world's leading brands — Phonak, Signia, Oticon, ReSound, Widex and Starkey. Every device we supply is 100% genuine, BIS-certified and covered by the complete manufacturer warranty.",
  },
  {
    q: "Do you provide home visits for testing and fitting?",
    a: "Yes. For patients who find it difficult to travel, our audiologists visit your home for the hearing test, hearing aid trial and fitting — across Delhi NCR, including Dwarka, Uttam Nagar, Greater Noida, Ghaziabad and Gurugram.",
  },
  {
    q: "Rechargeable or battery hearing aids — which should I choose?",
    a: "It depends on your lifestyle. Rechargeable, Bluetooth-enabled models are convenient and easy to use, while battery-powered aids are ideal for certain types of hearing loss. Our audiologists will recommend the best option after your free hearing assessment.",
  },
  {
    q: "What about aftercare, warranty and servicing?",
    a: "Every hearing aid includes brand warranty plus our lifelong after-sales support — free follow-ups, cleaning, servicing and re-fittings. Extended warranty options are also available so your device stays protected for longer.",
  },
];

const SUPPORT_POINTS = [
  "Free hearing test & home trial",
  "EMI from 6 to 24 months",
  "Home visits across Delhi NCR",
];

function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ---------- Left: intro + contact ---------- */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-soft px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-brand-dark uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Got Questions?
            </span>
            <h2 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-heading sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
              Frequently Asked{" "}
              <span className="text-accent">Questions</span>
            </h2>
            <p className="mt-4 leading-relaxed text-body sm:text-lg">
              Everything you need to know about hearing tests, hearing aid prices, trials, EMI and
              aftercare. Still unsure? Our team is one call away.
            </p>

            {/* support points */}
            <ul className="mt-7 space-y-3">
              {SUPPORT_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm font-semibold text-heading">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <CheckIcon />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            {/* contact card */}
            <div className="relative mt-8 overflow-hidden rounded-2xl bg-accent p-6 text-white shadow-lg shadow-accent/30 sm:p-7">
              <p className="text-xs font-bold tracking-widest text-white/75 uppercase">
                Still have a question?
              </p>
              <p className="mt-2 text-lg leading-snug font-bold">
                Talk to a hearing care expert — it&apos;s free.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href="tel:+919811224051"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#2f6b1f] transition-transform hover:-translate-y-0.5"
                >
                  <PhoneIcon />
                  +91 98112 24051
                </a>
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-1.5 text-sm font-bold text-white transition-colors hover:text-[#eafbe0]"
                >
                  Book Free Hearing Test
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                </Link>
              </div>
            </div>
          </div>

          {/* ---------- Right: accordion ---------- */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {FAQS.map((faq, index) => {
                const open = openIndex === index;
                return (
                  <div
                    key={faq.q}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      open
                        ? "border-brand/30 bg-brand-soft/40 shadow-md shadow-brand/5"
                        : "border-slate-200 bg-neutral-primary/60 hover:border-brand/25 hover:bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : index)}
                      aria-expanded={open}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    >
                      <span className="flex items-start">
                        <span
                          className={`text-base leading-snug font-bold transition-colors duration-300 sm:text-lg ${
                            open ? "text-brand-dark" : "text-heading"
                          }`}
                        >
                          {faq.q}
                        </span>
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          open
                            ? "rotate-180 border-transparent bg-brand text-white"
                            : "border-slate-300 bg-white text-body"
                        }`}
                      >
                        <ChevronDownIcon open={open} />
                      </span>
                    </button>

                    {/* collapsible answer */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                          <div className="border-l-2 border-brand/30 pl-4 sm:pl-5">
                            <p className="text-sm leading-relaxed text-body sm:text-[0.95rem]">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}