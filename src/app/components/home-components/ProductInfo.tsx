import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    name: "Signia",
    models: "Silk, Pure, Motion, Insio",
    image: "/assets/images/signia.webp",
  },
  {
    name: "Phonak",
    models: "Audéo, Virto, Naída, Sky",
    image: "/assets/images/phonak.webp",
  },
  {
    name: "ReSound",
    models: "Omnia, Nexia, One, LiNX",
    image: "/assets/images/resoundgen.webp",
  },
  {
    name: "Widex",
    models: "Moment, SmartRIC, Evoke, Beyond",
    image: "/assets/images/widex.webp",
  },
  {
    name: "Oticon",
    models: "Intent, Real, More, Opn",
    image: "/assets/images/oticon.webp",
  },
  {
    name: "Starkey",
    models: "Genesis AI, Evolv AI, Livio, Halo",
    image: "/assets/images/starkey.webp",
  },
];

export default function ProductInfo() {
  return (
    <section id="products" className="relative overflow-hidden bg-neutral-primary py-16 sm:py-20 lg:py-24">
      {/* soft decorative glow */}
      <div
        className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-brand/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Header ---------- */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-white px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-brand-dark uppercase shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Authorised Partner
          </span>
          <h2 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-heading sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            A Range of{" "}
            <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">
              Latest Technology
            </span>{" "}
            Hearing Devices
          </h2>
        </div>

        {/* ---------- Product grid ---------- */}
        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {PRODUCTS.map((product) => (
            <Link
              key={product.name}
              href="/services"
              className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl"
            >
              {/* Upper brand image */}
              <div className="relative h-36 overflow-hidden bg-[#f1f1f1] sm:h-40">
                <Image
                  src={product.image}
                  alt={`${product.name} hearing aids`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Body — brand + models (compact) */}
              <div className="px-4 py-3 text-center sm:py-3.5">
                <h3 className="text-base font-bold text-slate-800 sm:text-lg">{product.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                  {product.models}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}