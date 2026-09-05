import Image from "next/image";
import Link from "next/link";

const EXPLORE_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Hearing Aids", href: "/hearing-aid" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
];

const SUPPORT_LINKS = [
  { label: "Contact Us", href: "/contact-us" },
  { label: "Our Locations", href: "/location" },
  { label: "Book Free Test", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const CONTACT = {
  phones: [
    { label: "+91 98112 24051", href: "tel:+919811224051" },
    { label: "+91 98112 24059", href: "tel:+919811224059" },
  ],
  email: "info@soundrichhearing.com",
  address:
    "Shop No. T15C, Galaxy Blue Sapphire, Sector 4, Greater Noida West, Noida, Uttar Pradesh 201306",
  hours: "Mon – Sat: 10:00 AM – 7:30 PM",
};

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/soundrichhearing",
    hoverClasses:
      "border-[#1877F2]/30 text-[#1877F2] hover:bg-[#1877F2] hover:shadow-[#1877F2]/40",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/soundrichhearing/",
    hoverClasses:
      "border-[#E4405F]/30 text-[#E4405F] hover:bg-[#E4405F] hover:shadow-[#E4405F]/40",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162Zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4Zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44Z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "#",
    hoverClasses:
      "border-slate-900/20 text-slate-900 hover:bg-slate-900 hover:shadow-slate-900/40",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    hoverClasses:
      "border-[#FF0000]/30 text-[#FF0000] hover:bg-[#FF0000] hover:shadow-[#FF0000]/40",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    hoverClasses:
      "border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:shadow-[#25D366]/40",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
];

function MapPinIcon() {
  return (
    <svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 text-sm font-bold tracking-[0.15em] text-white uppercase">
      {children}
      <span className="mt-2.5 block h-1 w-9 rounded-full bg-gradient-to-r from-accent to-accent-dark" />
    </h3>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-base text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-accent"
      >
        <span className="h-1 w-1 rounded-full bg-accent/40 transition-all duration-300 group-hover:w-2.5 group-hover:bg-accent" />
        {children}
      </Link>
    </li>
  );
}

function ContactRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3.5">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
        {icon}
      </span>
      <span className="pt-1.5">{children}</span>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#102a44] to-[#0a1c30]">
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-brand/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -bottom-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
      />

      {/* Brand hairline */}
      <div className="relative h-1.5 bg-gradient-to-r from-brand via-accent to-brand" />

      {/* CTA band */}
      <div className="relative mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand to-brand-dark px-6 py-10 shadow-2xl shadow-brand/25 sm:px-12">
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 left-1/4 h-40 w-40 rounded-full bg-accent/20 blur-2xl"
          />
          <div className="relative flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase">
                Free Hearing Test · Home Trial · Easy EMI
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Ready to hear life clearly again?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-white/80 sm:text-base">
                Talk to an expert audiologist today and take the first step
                toward better hearing.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+919811224051"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-brand-dark shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                Call +91 98112 24051
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-dark px-6 py-3 text-base font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Book Free Hearing Test
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block" aria-label="Soundrich Hearing – Home">
              <Image
                src="/assets/logos/Sound-rich-logo-footer.png"
                alt="Soundrich Hearing"
                width={151}
                height={61}
                className="h-10 w-auto sm:h-12"
              />
            </Link>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-slate-300">
              Hear Better, Live Better. Soundrich Hearing brings you premium
              digital hearing aids, expert audiologists, free hearing
              assessments and home visit services across Delhi NCR.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={social.label}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg ${social.hoverClasses}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <SectionTitle>Explore</SectionTitle>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <SectionTitle>Support</SectionTitle>
            <ul className="space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-4">
            <SectionTitle>Get in Touch</SectionTitle>
            <ul className="space-y-4 text-base text-slate-300">
              <ContactRow icon={<MapPinIcon />}>
                {CONTACT.address}
              </ContactRow>
              <ContactRow icon={<PhoneIcon />}>
                <span className="flex flex-wrap gap-x-3">
                  {CONTACT.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="font-medium text-slate-200 transition-colors hover:text-accent"
                    >
                      {phone.label}
                    </a>
                  ))}
                </span>
              </ContactRow>
              <ContactRow icon={<MailIcon />}>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-medium text-slate-200 transition-colors hover:text-accent"
                >
                  {CONTACT.email}
                </a>
              </ContactRow>
              <ContactRow icon={<ClockIcon />}>
                {CONTACT.hours}
              </ContactRow>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-accent-dark bg-accent">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-3 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-base text-white">
            © {new Date().getFullYear()} Soundrich Hearing. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-base">
            <Link
              href="/privacy-policy"
              className="text-white/90 transition-colors hover:text-white hover:underline hover:underline-offset-4"
            >
              Privacy Policy
            </Link>
            <span className="h-3 w-px bg-white/40" aria-hidden="true" />
            <Link
              href="/terms-and-conditions"
              className="text-white/90 transition-colors hover:text-white hover:underline hover:underline-offset-4"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}