import Image from "next/image";
import Link from "next/link";

const CheckBadge = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const UsersIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
    />
  </svg>
);


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

const STATS = [
  { value: "10,000+", label: "Happy Clients" },
  { value: "6+", label: "Centres in Delhi NCR" },
  { value: "3-Yr", label: "Warranty Support" },
  { value: "100%", label: "Satisfaction Focus" },
];

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Soft decorative background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-brand-soft blur-3xl" />
        <div className="absolute top-1/2 -right-32 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div
          className="absolute -bottom-10 left-1/3 h-40 w-64 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,143,196,0.18) 1.5px, transparent 1.5px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ---- Visual collage ---- */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            {/* Rotated soft frame behind the photo */}
            <div
              className="absolute -top-4 -left-4 hidden h-full w-full rotate-[-3deg] rounded-[2.2rem] bg-gradient-to-br from-brand/20 via-brand-soft to-accent/20 sm:block"
              aria-hidden="true"
            />

            {/* Main image */}
            <div className="group relative overflow-hidden rounded-[2rem] shadow-2xl shadow-brand/25 ring-1 ring-slate-900/5">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/assets/images/Soundrich-Hearing.jpg"
                  alt="Soundrich Hearing audiologists providing expert hearing care in Delhi NCR"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              {/* Soft gradient for card legibility */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-brand-dark/25 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Floating stat card — bottom left */}
            <div className="absolute bottom-6 -left-2 sm:bottom-8 sm:-left-8">
              <div className="flex items-center gap-4 rounded-2xl border border-white/60 bg-white/90 p-4 pr-6 shadow-xl shadow-slate-900/10 backdrop-blur-md motion-reduce:animate-none sm:animate-float">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-lg shadow-brand/30">
                  <UsersIcon />
                </div>
                <div>
                  <p className="text-2xl leading-none font-extrabold text-heading">
                    50,000+
                  </p>
                  <p className="mt-1 text-xs font-semibold tracking-wide text-body uppercase">
                    Happy Clients
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge — top right */}
            <div className="absolute top-6 -right-2 sm:top-8 sm:-right-5">
              <div className="flex items-center gap-2.5 rounded-full border border-white/60 bg-white/90 py-2.5 pr-5 pl-3 shadow-lg shadow-slate-900/10 backdrop-blur-md motion-reduce:animate-none sm:animate-float-slow">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <CheckBadge />
                </span>
                <p className="text-xs font-bold text-heading">
                  Experienced Audiologists
                </p>
              </div>
            </div>

          </div>

          {/* ---- Content ---- */}
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-brand-dark uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              About Soundrich Hearing
            </span>

            <h2 className="mt-5 text-3xl leading-tight font-extrabold text-heading sm:text-4xl lg:text-[2.65rem]">
              We Are{" "}
              <span className="text-brand-dark underline decoration-accent/70 decoration-4 underline-offset-8">
                Soundrich Hearing
              </span>
            </h2>

            <p className="mt-6 leading-relaxed text-body">
              Our raison d’etre is very simple – we want to enable everyone to hear. And we firmly believe that no one should miss out on the joy of listening to music, the sounds of birds chirping, or the words of a loved one.{" "}
              <strong className="font-semibold text-heading">
                free hearing assessment
              </strong>{" "}
              And that is what we at Sound Rich Hearing strive towards, day in and day out. We are dealers of hearing aid products of companies such as Phonak, Oticon, Signia, widex, and so on. We deliver the most cutting-edge hearing aid solutions by dealing with the Indian offices of these companies to acquire their products.
            </p>

            {/* Feature checklist with matching icons */}
            <ul className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
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
