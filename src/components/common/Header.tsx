"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { brandList } from "@/data/hearingAidBrands";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Hearing Aids", href: "/hearing-aid" },
  /*{ label: "Hearing Test", href: "/hearing-test" },*/
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Our Centres", href: "/location" },
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
            className="h-12 w-auto sm:h-16"
          />
        </Link>

        {/* Desktop nav + CTA grouped on the right */}
        <div className="flex items-center gap-1">
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) =>
              item.label === "Hearing Aids" ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    aria-haspopup="true"
                    className={`relative inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-base font-medium transition-colors ${
                      isActive(item.href) || pathname.includes("-hearing-aid")
                        ? "text-brand"
                        : "text-slate-700 hover:text-brand"
                    }`}
                  >
                    <span className="leading-none">{item.label}</span>
                    <svg
                      className="h-3 w-3 shrink-0 self-center translate-y-px transition-transform duration-300 group-hover:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand transition-transform duration-300 ${
                        isActive(item.href) || pathname.includes("-hearing-aid")
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>

                  {/* Dropdown */}
                  <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-xl border border-slate-100 bg-white py-2 shadow-xl shadow-slate-900/10">
                      {brandList.map((brand) => (
                        <Link
                          key={brand.slug}
                          href={`/${brand.slug}`}
                          className={`group/item flex items-center justify-between px-5 py-2.5 transition-colors hover:bg-brand-soft ${
                            pathname === `/${brand.slug}` ? "bg-brand-soft" : ""
                          }`}
                        >
                          <span className="text-sm font-semibold text-heading transition-colors group-hover/item:text-brand-dark">
                            {brand.name}
                          </span>
                          <svg
                            className="h-3.5 w-3.5 -translate-x-1 text-brand opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
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
              )
            )}
          </nav>

          <Link
            href="/contact-us"
            className="ml-3 hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-dark px-5 py-2.5 text-base font-semibold text-white shadow-md shadow-brand/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:inline-flex"
          >
            Book Free Hearing Test
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
            {/* Brand sub-pages in mobile menu */}
            <div className="mt-2 space-y-1 rounded-xl bg-slate-50 p-2">
              <p className="px-3 pt-1 text-[0.65rem] font-bold tracking-[0.2em] text-body/60 uppercase">
                Hearing Aid Brands
              </p>
              {brandList.map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/${brand.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === `/${brand.slug}`
                      ? "bg-brand-soft text-brand"
                      : "text-slate-600 hover:bg-white hover:text-brand"
                  }`}
                >
                  {brand.name} Hearing Aids
                </Link>
              ))}
            </div>
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