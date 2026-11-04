"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How do I know if I need a hearing test?",
    a: "If you frequently ask people to repeat themselves, increase TV volume, struggle with phone conversations or find noisy places difficult, a professional hearing assessment can help you understand your hearing.",
  },
  {
    q: "How long does a hearing test take?",
    a: "The duration can vary depending on the assessment. Our hearing-care team can guide you through the process.",
  },
  {
    q: "Can I try a hearing aid before buying?",
    a: "Where applicable, hearing-aid trials can help you understand comfort, sound and usability before making a decision.",
  },
  {
    q: "Do you provide home visits?",
    a: "Home-visit support is available in selected locations. Contact our team to check availability in your area.",
  },
  {
    q: "Do you provide after-sales support?",
    a: "Yes. Soundrich provides ongoing guidance and support after your hearing solution is fitted.",
  },
];

const SUPPORT_POINTS = [
  "Free hearing test & home trial",
  "EMI from 6 to 24 months",
  "Home visits across Delhi NCR",
];

function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-[#155dfc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
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
<h2 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-heading sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
              Frequently Asked{" "}
              <span className="text-accent">Questions</span>
            </h2>
            <p className="mt-4 leading-relaxed text-body sm:text-lg">
              Everything you need to know about hearing tests, hearing aid prices, trials, EMI and
              aftercare. Still unsure? Our team is one call away.
            </p>

            {/* support points */}
            <ul className="mt-10 space-y-3">
              {SUPPORT_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm font-semibold text-heading">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#155dfc]/10">
                    <CheckIcon />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
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
                        ? "border-[#155dfc]/30 shadow-md shadow-[#155dfc]/5"
                        : "border-slate-200 bg-neutral-primary/60 hover:border-[#155dfc]/25 hover:bg-white"
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
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${open ? "rotate-180 border-transparent bg-[#155dfc] text-white"
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
                        <div className="pb-5 sm:pb-6">
                          <div className="pl-4 sm:pl-5">
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