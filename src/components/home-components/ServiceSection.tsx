import Image from "next/image";
import Link from "next/link";

const ArrowUpRightIcon = () => (
  <svg
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);

/* ---- Services (matched to images in /assets/images) ---- */

const SERVICES = [
  {
    id: "01",
    image: "/assets/images/Oto%20Acoustic%20Emissions%20(OAE).webp",
    alt: "Oto acoustic emissions inner-ear test at Soundrich Hearing",
    title: "Oto Acoustic Emissions",
    description:
      "A quick, gentle test of inner-ear (cochlear) function — widely used for hearing screening in newborns, children and adults.",
  },
  {
    id: "02",
    image: "/assets/images/Hearing%20Aid%20Fittings.webp",
    alt: "Hearing aid fitting and programming at Soundrich Hearing",
    title: "Hearing Aid Fittings",
    description:
      "Personalised fitting and programming of your hearing aids with real-ear verification — tuned until speech sounds clear and natural.",
  },
  {
    id: "03",
    image: "/assets/images/Hearing%20Aid%20Trials.webp",
    alt: "Hearing aid trial at Soundrich Hearing",
    title: "Hearing Aid Trials",
    description:
      "Experience premium digital hearing aids on trial — at our centre or in the comfort of your own home — before you make a decision.",
  },
  {
    id: "04",
    image: "/assets/images/Home%20Visit%20Facility.webp",
    alt: "Home visit hearing care facility at Soundrich Hearing",
    title: "Home Visit Facility",
    description:
      "Can't visit us? Our certified audiologists bring hearing tests, fitting and aftercare to your doorstep across Delhi NCR.",
  },
];

/* ---- Card ---- */

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <Link
      href="/services"
      className="group relative flex min-h-[400px] flex-col justify-end overflow-hidden rounded-[1.75rem] shadow-xl shadow-brand/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand/25 sm:min-h-[440px]"
    >
      <Image
        src={service.image}
        alt={service.alt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
      />
      {/* Readability overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/5" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/35 to-transparent" />

      {/* Large number watermark */}
      <span
        className="absolute top-5 right-6 text-6xl font-extrabold text-white/30 italic select-none sm:top-6 sm:right-8 sm:text-7xl"
        aria-hidden="true"
      >
        {service.id}
      </span>

      {/* Content */}
      <div className="relative p-5 sm:p-6">
        <h3 className="text-lg leading-snug font-extrabold text-white sm:text-xl">
          {service.title}
        </h3>
        <p className="mt-2 line-clamp-4 max-w-xl text-sm leading-relaxed text-slate-200">
          {service.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white">
          Read More
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-colors duration-300 group-hover:bg-white group-hover:text-brand">
            <ArrowUpRightIcon />
          </span>
        </span>
      </div>
    </Link>
  );
}

/* ---- Section ---- */

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="relative bg-brand-soft py-20 sm:py-24 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
<h2 className="mt-5 text-3xl leading-tight font-extrabold text-heading sm:text-4xl lg:text-[2.65rem]">
            Complete Hearing Care,{" "}
            <span className="text-brand-dark">
              Under One Roof
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-body">
            From your first hearing test to fitting, trials and home visits —
            every service you need is delivered by certified audiologists with
            genuine, personalised care.
          </p>
        </div>

        {/* Service cards — 4 per row */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-7">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
