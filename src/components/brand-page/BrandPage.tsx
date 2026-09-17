import Image from "next/image";
import Link from "next/link";

import type { HearingAidBrand } from "@/data/hearingAidBrands";
import { brandList } from "@/data/hearingAidBrands";

/* ---------- Small icons ---------- */

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
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

/* ---------- Section label ---------- */

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-brand uppercase">
      <span className="h-px w-8 bg-brand/50" aria-hidden="true" />
      {text}
    </span>
  );
}

/* ---------- Brand page ---------- */

export default function BrandPage({ brand }: { brand: HearingAidBrand }) {
  const otherBrands = brandList.filter((b) => b.slug !== brand.slug);

  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-950">
        <Image
          src={brand.heroImage}
          alt={`${brand.name} hearing aids banner`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-4 py-20 sm:px-6 sm:min-h-[520px] lg:px-8 lg:min-h-[560px]">
          <div className="max-w-2xl">
            <h1 className="text-4xl leading-[1.1] font-extrabold tracking-tight text-white drop-shadow-xl sm:text-5xl lg:text-6xl">
              {brand.heroTitle}
            </h1>
            <p className="mt-4 text-base font-medium text-white/85 drop-shadow-md sm:text-lg">
              {brand.tagline}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-100/90 sm:text-lg">
              {brand.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/40 transition-all hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Book Free Hearing Test
                <ArrowIcon />
              </Link>
              <a
                href="tel:+919811224051"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-slate-900"
              >
                <PhoneIcon />
                Call: +91 98112 24051
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRICE SECTION ================= */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel text="Transparent Pricing" />
            <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-heading sm:text-4xl">
              {brand.priceSection.title}
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              {brand.priceSection.intro}
            </p>
          </div>

          {/* Price tiers */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {brand.priceSection.tiers.map((tier, index) => (
              <div
                key={tier.segment}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1.5"
                  style={{ backgroundColor: index === brand.priceSection.tiers.length - 1 ? brand.accentColor : "#008fc4" }}
                  aria-hidden="true"
                />
                <p className="text-xs font-bold tracking-[0.18em] text-body/70 uppercase">
                  {tier.segment}
                </p>
                <p className="mt-4 text-2xl leading-tight font-extrabold tracking-tight text-heading">
                  {tier.price}
                </p>
                {tier.note ? (
                  <p className="mt-2 text-xs font-medium text-body/70">{tier.note}</p>
                ) : null}
              </div>
            ))}
          </div>

          {/* EMI strip */}
          <div className="mt-8 flex flex-col items-start gap-3 rounded-2xl border border-accent/30 bg-accent/5 px-6 py-5 sm:flex-row sm:items-center sm:gap-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase">
              EMI Available
            </span>
            {brand.priceSection.emi.map((emi) => (
              <span key={emi} className="flex items-center gap-2 text-sm font-semibold text-heading">
                <span className="text-accent">
                  <CheckIcon />
                </span>
                {emi}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT THE BRAND ================= */}
      <section className="bg-neutral-secondary-soft py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionLabel text="About the Brand" />
              <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-heading sm:text-4xl">
                {brand.aboutTitle}
              </h2>
              {brand.aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="mt-5 leading-relaxed text-body">
                  {paragraph}
                </p>
              ))}
              <Link
                href="/contact-us"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-dark transition-colors hover:text-brand"
              >
                Talk to a hearing care expert
                <ArrowIcon />
              </Link>
            </div>

            {/* Brand card visual */}
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-slate-950 p-10 text-center shadow-2xl">
              <div
                className="pointer-events-none absolute inset-0 opacity-25"
                style={{
                  background: `radial-gradient(ellipse 70% 60% at 50% 0%, ${brand.accentColor} 0%, transparent 70%)`,
                }}
                aria-hidden="true"
              />
              <div className="relative rounded-2xl bg-white p-8 shadow-inner">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={220}
                  height={90}
                  className="mx-auto h-16 w-auto object-contain sm:h-20"
                />
              </div>
              <p className="relative mt-7 text-lg font-bold text-white sm:text-xl">
                {brand.name} Hearing Aids
              </p>
              <p className="relative mt-2 text-sm text-white/70">{brand.tagline}</p>
              <span
                className="relative mt-5 inline-block rounded-full px-4 py-1.5 text-[0.65rem] font-bold tracking-[0.2em] text-white uppercase"
                style={{ backgroundColor: brand.accentColor }}
              >
                Genuine &amp; Warranty Backed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY THE BRAND ================= */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel text="Technology & Comfort" />
            <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-heading sm:text-4xl">
              {brand.whyBrandTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-body">{brand.whyBrandText}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {brand.whyBrandPoints.map((point) => (
              <div
                key={point.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 hover:ring-brand/30"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                  style={{ backgroundColor: brand.accentColor }}
                >
                  <CheckIcon />
                </span>
                <h3 className="mt-5 text-lg font-bold text-heading">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY SOUNDRICH ================= */}
      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 80% 10%, ${brand.accentColor} 0%, transparent 70%)`,
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-white/60 uppercase">
                <span className="h-px w-8 bg-white/40" aria-hidden="true" />
                Your Trusted Partner
              </span>
              <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl">
                {brand.whySoundrichTitle}
              </h2>
              <p className="mt-5 leading-relaxed text-white/75">
                Soundrich Hearing has served 50,000+ happy clients across 10+
                locations in Delhi NCR. Every {brand.name} device we supply is
                100% genuine and covered by the full manufacturer warranty.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919811224051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <WhatsAppIcon />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+919811224051"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-slate-900"
                >
                  <PhoneIcon />
                  +91 98112 24051
                </a>
              </div>
            </div>

            <ul className="grid content-start gap-3.5 sm:grid-cols-2">
              {brand.whySoundrichPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-sm font-medium text-white/90"
                >
                  <span className="mt-0.5 text-accent">
                    <CheckIcon />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= OTHER BRANDS ================= */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionLabel text="Explore More" />
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">
              Other Hearing Aid Brands We Offer
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {otherBrands.map((other) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10"
              >
                <div className="flex h-14 items-center">
                  <Image
                    src={other.logo}
                    alt={`${other.name} logo`}
                    width={120}
                    height={48}
                    className="max-h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-dark">
                  View {other.name}
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
