import Image from "next/image";

const AVATAR = "/assets/images/unnamed.png";

const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    meta: "Dwarka, New Delhi",
    tag: "Free Hearing Test & Trial",
    quote:
      "I was nervous about wearing hearing aids, but the free test and 15-day home trial made the decision so easy. Today I hear my grandchildren clearly — life has changed completely.",
  },
  {
    name: "Meena Gupta",
    meta: "Uttam Nagar, Delhi",
    tag: "Home Visit Facility",
    quote:
      "My 78-year-old mother can't travel, so their audiologist came home for the test and fitting. Kind, patient and professional — the home visit service is a blessing for elderly patients.",
  },
  {
    name: "Amit Verma",
    meta: "Greater Noida West",
    tag: "Rechargeable & Bluetooth",
    quote:
      "Bought a rechargeable Bluetooth hearing aid on easy EMI. It pairs with my phone, the sound is crystal clear, and their aftercare service has been outstanding since day one.",
  },
  {
    name: "Sunita Rao",
    meta: "Janakpuri, New Delhi",
    tag: "Easy EMI Options",
    quote:
      "Transparent pricing and flexible EMI made premium aids affordable for our family. The counsellor explained every option honestly — no pressure, no hidden costs. Highly recommended!",
  },
  {
    name: "Harpreet Singh",
    meta: "Ghaziabad",
    tag: "Transparent Pricing",
    quote:
      "After visiting several dealers I finally found Soundrich. Genuine devices, fair prices and unlimited free follow-ups. My hearing has improved and so has my confidence at work.",
  },
  {
    name: "Kavita Nair",
    meta: "Gurugram",
    tag: "Discreet Digital Aids",
    quote:
      "Their discreet digital aids are invisible at office meetings yet incredibly powerful. From the free assessment to the final fitting, everything felt personal and caring.",
  },
];

function StarIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Header ---------- */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-soft px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-brand-dark uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Patient Stories
          </span>
          <h2 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-heading sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            What Our{" "}
            <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">
              Happy Patients
            </span>{" "}
            Say
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
            Real experiences from people who choose Soundrich Hearing for better hearing and a
            better life.
          </p>
        </div>

        {/* ---------- Testimonial grid ---------- */}
        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl sm:p-7"
            >
              {/* Top: stars + tag */}
              <div className="flex items-center justify-between gap-3">
                <Stars />
                <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[0.62rem] font-bold tracking-wider text-brand-dark uppercase">
                  {t.tag}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="mt-5 flex-1">
                <p className="text-sm leading-relaxed text-body sm:text-[0.95rem] sm:leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <figcaption className="mt-6 flex items-center gap-3 border-t border-dashed border-slate-200 pt-5">
                <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-brand/20 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={AVATAR}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-heading">{t.name}</p>
                  <p className="truncate text-xs text-body/70">{t.meta}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>


      </div>
    </section>
  );
}