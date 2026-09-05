import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Soundrich Hearing",
  description:
    "Read the Privacy Policy of Soundrich Hearing to understand how we collect, use and protect your personal information.",
};

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We may collect personal information you provide when you contact us, book a hearing assessment or use our services. This may include your name, phone number, email address, location and relevant hearing health details. We also collect limited technical information such as browser type and pages visited to improve our website.",
  },
  {
    title: "How We Use Your Information",
    body: "Your information is used to respond to enquiries, schedule appointments, provide hearing care services, send service-related updates and improve our offerings. We do not sell your personal information to third parties.",
  },
  {
    title: "Cookies",
    body: "Our website may use cookies to enhance your browsing experience and understand how visitors use our site. You can disable cookies in your browser settings at any time.",
  },
  {
    title: "Data Security",
    body: "We take reasonable technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure or destruction.",
  },
  {
    title: "Third-Party Links",
    body: "Our website may contain links to external websites. We are not responsible for the privacy practices or content of those third-party sites and encourage you to review their policies.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information at any time by contacting us. We will respond to valid requests within a reasonable timeframe.",
  },
  {
    title: "Contact Us",
    body: "If you have any questions about this Privacy Policy, please reach out to us at info@soundrichhearing.com or call +91 98112 24051.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <div className="bg-gradient-to-r from-brand-dark via-brand to-brand-dark">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-medium text-white/80">Soundrich Hearing</p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Privacy Policy
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
            Have questions about your privacy?{" "}
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