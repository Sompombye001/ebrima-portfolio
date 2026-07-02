import type { Metadata } from "next";
import Reveal from "@/components/motion/reveal";
import ProjectGrid from "@/components/sections/project-grid";
import ContactCta from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Institutional, government, banking, and commercial software built by Ebrima Sompo — from national intelligence platforms to luxury e-commerce.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="container-page pb-16 pt-40">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-gold">
            Projects
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-medium tracking-tightest text-paper sm:text-6xl">
            Systems built across commerce.
          </h1>
        </Reveal>
      </section>

      <section className="container-page pb-28">
        <Reveal delay={0.1}>
          <ProjectGrid />
        </Reveal>
      </section>

      <ContactCta />
    </>
  );
}
