import { notFound } from "next/navigation";

import { landingPages } from "@/data/landingPages";

import Hero from "@/components/landing-page/Hero";
import About from "@/components/landing-page/About";
import Benefits from "@/components/landing-page/Benifits";
import Cta from "@/components/landing-page/Cta";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page =
    landingPages[slug as keyof typeof landingPages];

  if (!page) {
    notFound();
  }

  return (
    <>
      <Hero
        title={page.hero.title}
        description={page.hero.description}
        image={page.hero.image}
        buttonText={page.hero.buttonText}
      />

      <About
        title={page.about.title}
        description={page.about.description}
        image={page.about.image}
      />

      <Benefits
        benefits={page.benefits}
      />

      <Cta
        title={page.cta.title}
        buttonText={page.cta.buttonText}
      />
    </>
  );
}