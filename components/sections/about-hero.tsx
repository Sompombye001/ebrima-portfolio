import { profile } from "@/data/content";
import Reveal from "@/components/motion/reveal";

export default function AboutHero() {
  return (
    <section className="container-page pb-20 pt-40">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-widest text-gold">
          About
        </span>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium tracking-tightest text-paper sm:text-6xl lg:text-7xl">
          I build the software that sits underneath the announcement.
        </h1>
      </Reveal>
      <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <Reveal delay={0.1}>
          <div className="space-y-5">
            {profile.bio.map((p, i) => (
              <p key={i} className="text-balance text-lg text-paper-muted">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="rounded-2xl border border-ink-line bg-ink-surface p-6">
            <dl className="space-y-4 font-mono text-xs">
              <div className="flex justify-between border-b border-ink-line pb-3">
                <dt className="text-paper-faint">Based in</dt>
                <dd className="text-paper">{profile.location}</dd>
              </div>
              <div className="flex justify-between border-b border-ink-line pb-3">
                <dt className="text-paper-faint">Status</dt>
                <dd className="text-gold">{profile.availability}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-paper-faint">Focus</dt>
                <dd className="text-paper text-right">
                  {profile.titles[0]}
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
