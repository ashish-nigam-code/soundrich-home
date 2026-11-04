import AboutVideo from "./AboutVideo";

/* Feature icons — each matches its feature title */
const IconEar = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
    <path d="M10.5 9.5a2 2 0 0 1 3.9-.6" />
  </svg>
);

const IconAssessment = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const IconChip = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="5" y="5" width="14" height="14" rx="2" />
    <rect x="9.5" y="9.5" width="5" height="5" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
  </svg>
);

const IconHome = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m3 10.5 9-7.5 9 7.5" />
    <path d="M5 10v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9" />
    <path d="M10 21v-6h4v6" />
  </svg>
);


/* Row colour groups — people & care (blue), services (green), trust & quality (deep blue) */
const FEATURES = [
  {
    icon: IconEar,
    chipClass: "bg-brand/10 text-brand",
    title: "Experienced Audiologists",
    text: "Experienced hearing Audiologists you can trust",
  },
  {
    icon: IconAssessment,
    chipClass: "bg-brand/10 text-brand",
    title: "Free Hearing Assessment",
    text: "Comprehensive tests with no obligations",
  },
  {
    icon: IconChip,
    chipClass: "bg-accent/15 text-accent",
    title: "10+ Locations",
    text: "Specialized hearing care across 10+ locations",
  },
  {
    icon: IconHome,
    chipClass: "bg-accent/15 text-accent",
    title: "Home Visit Service",
    text: "Expert care delivered to your doorstep",
  },
  
];

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="relative bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ---- Video ---- */}
          <AboutVideo />

          {/* ---- Content ---- */}
          <div className="max-w-2xl">
            <h2 className="mt-5 text-3xl leading-tight font-extrabold text-heading sm:text-4xl lg:text-[2.65rem]">
              More About{" "}
              <span className="text-brand-dark">
                Soundrich Hearing
              </span>
            </h2>

            <p className="mt-6 leading-relaxed text-body">
              We are driven by the values of customer centricity and integrity. We will always have your best interests in our heart while dealing with you.
              Our raison d’etre is very simple – we want to enable everyone to hear. And we firmly believe that no one should miss out on the joy of listening to music, the sounds of birds chirping, or the words of a loved one.
              And that is what we at Sound Rich Hearing strive towards, day in and day out. We are dealers of hearing aid products of companies such as Phonak, Oticon, Signia, widex, and so on. We deliver the most cutting-edge hearing aid solutions by dealing with the Indian offices of these companies to acquire their products.
            </p>

            {/* Feature checklist with matching icons */}
            <ul className="mt-10 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <li key={feature.title} className="flex items-start gap-3.5">
                  <span
                    className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${feature.chipClass}`}
                  >
                    <feature.icon />
                  </span>
                  <div className="pt-0.5">
                    <p className="text-sm font-bold text-heading">
                      {feature.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-body">
                      {feature.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
