import type { Metadata } from "next";
import AboutHero from "@/components/sections/about-hero";
import AboutStats from "@/components/sections/about-stats";
import AboutValues from "@/components/sections/about-values";
import AboutSkills from "@/components/sections/about-skills";
import ExperiencePreview from "@/components/sections/experience-preview";
import ContactCta from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Computer Science student and software engineer in The Gambia, building production systems for government, banking, and commercial clients.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <ExperiencePreview />
      <AboutSkills />
      <ContactCta />
    </>
  );
}
