import { skills } from "@/data/content";
import Reveal from "@/components/motion/reveal";

const groups = [
  { label: "Languages", items: skills.languages },
  { label: "Frameworks & Tools", items: skills.frameworks },
  { label: "Platforms", items: skills.platforms },
  { label: "Design", items: skills.design },
  { label: "Infrastructure", items: skills.infra },
];

export default function AboutSkills() {
  return (
    <section className="container-page pb-28">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-widest text-gold">
          Technologies
        </span>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium tracking-tightest text-paper sm:text-5xl">
          The full toolkit.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal key={g.label} delay={i * 0.06}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-paper-faint">
              {g.label}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ink-line bg-ink-surface px-4 py-2 text-sm text-paper-muted transition-colors hover:border-gold/40 hover:text-paper"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
