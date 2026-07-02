import { skills } from "@/data/content";
import Reveal from "@/components/motion/reveal";

const all = [
  ...skills.frameworks,
  ...skills.languages,
  ...skills.platforms,
  ...skills.design,
];

export default function SkillsPreview() {
  return (
    <section className="border-y border-ink-line py-20">
      <Reveal className="container-page mb-10">
        <span className="font-mono text-xs uppercase tracking-widest text-gold">
          Toolkit
        </span>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tightest text-paper sm:text-4xl">
          One stack, from Figma to distributed backends.
        </h2>
      </Reveal>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
        <div className="flex w-max animate-marquee gap-4">
          {[...all, ...all].map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="shrink-0 rounded-full border border-ink-line bg-ink-surface px-5 py-2.5 font-body text-sm text-paper-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
