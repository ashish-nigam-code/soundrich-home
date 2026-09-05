import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Soundrich Hearing",
  description:
    "Read the Terms & Conditions of Soundrich Hearing covering our hearing care services, appointments and website usage.",
};

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing this website or using our services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of our website and services.",
  },
  {
    title: "Our Services",
    body: "Soundrich Hearing provides hearing assessments, hearing aid fittings, hearing care consultations and related services. Home visit and in-clinic appointments are available. Service availability may vary by location.",
  },
  {
    title: "Appointments & Payments",
    body: "Appointments can be booked by phone, email or through our website. Prices for products and services are subject to change without prior notice. Payment terms will be communicated at the time of purchase.",
  },
  {
    title: "Product Warranties",
    body: "Hearing aids and accessories come with manufacturer warranties. Warranty coverage varies by brand and model. Please retain your purchase receipt and consult our team for warranty-related assistance.",
  },
  {
    title: "Intellectual Property",
    body: "All content on this website, including text, graphics, logos and images, is the property of Soundrich Hearing and is protected by applicable copyright laws. You may not reproduce or distribute it without prior written permission.",
  },
  {
    title: "Limitation of Liability",
    body: "Soundrich Hearing shall not be liable for any indirect, incidental or consequential damages arising from the use of this website or our services, to the fullest extent permitted by law.",
  },
  {
    title: "Governing Law",
    body: "These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Noida, Uttar Pradesh.",
  },
  {
    title: "Contact Us",
    body: "For any questions regarding these Terms & Conditions, please contact us at info@soundrichhearing.com or call +91 98112 24051.",
  },
];

export default function TermsPage() {
  return (
    <main className="bg-white">
      <div className="bg-gradient-to-r from-brand-dark via-brand to-brand-dark">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-medium text-white/80">Soundrich Hearing</p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-sm text-white/80">
            Last updated: September 2026
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-heading">
                {section.title}
              </h2>
              <p className="mt-3 leading-relaxed text-body">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-neutral-primary p-6">
          <p className="text-sm text-body">
            Questions about our terms?{" "}
            <Link
              href="/contact-us"
              className="font-semibold text-brand hover:underline"
            >
              Contact us
            </Link>{" "}
            and our team will be happy to help.
          </p>
        </div>
      </div>
    </main>
  );
}