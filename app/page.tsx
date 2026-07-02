import Hero from "@/components/sections/hero";
import FeaturedProjects from "@/components/sections/featured-projects";
import SkillsPreview from "@/components/sections/skills-preview";
import ExperiencePreview from "@/components/sections/experience-preview";
import ContactCta from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsPreview />
      <ExperiencePreview />
      <ContactCta />
    </>
  );
}
