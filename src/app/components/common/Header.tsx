"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Hearing Aids", href: "/hearing-aid" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Locations", href: "/location" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-slate-900/8" : "border-b border-slate-100"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Brand logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Soundrich Hearing – Home"
        >
          <Image
            src="/assets/logos/brand-logo.png"
            alt="Soundrich Hearing"
            width={151}
            height={61}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        {/* Desktop nav + CTA grouped on the right */}
        <div className="flex items-center gap-1">
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative rounded-md px-3 py-2 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-brand"
                    : "text-slate-700 hover:text-brand"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand transition-transform duration-300 ${
                    isActive(item.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <Link
            href="/contact-us"
            className="ml-3 hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-dark px-5 py-2.5 text-base font-semibold text-white shadow-md shadow-brand/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:inline-flex"
          >
            Book Free Test
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand lg:hidden"
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Premium brand hairline */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-brand/70 to-transparent" />

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-slate-100 bg-white lg:hidden"
        >
          <nav
            className="space-y-1 px-4 pb-4 pt-2"
            aria-label="Mobile navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-brand-soft text-brand"
                    : "text-slate-700 hover:bg-slate-50 hover:text-brand"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              onClick={() => setMenuOpen(false)}
              className="mt-3 block rounded-full bg-gradient-to-r from-brand to-brand-dark px-5 py-3 text-center text-base font-semibold text-white shadow-md shadow-brand/30 transition-all hover:-translate-y-0.5 sm:hidden"
            >
              Book Free Hearing Test
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}