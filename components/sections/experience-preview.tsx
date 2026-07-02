import { experience, education } from "@/data/content";
import Reveal from "@/components/motion/reveal";

export default function ExperiencePreview() {
  return (
    <section className="container-page py-28">
      <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              Experience
            </span>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tightest text-paper sm:text-5xl">
              Three internships.
            </h2>
          </Reveal>

          <div className="mt-14 flex flex-col">
            {experience.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.08}>
                <div className="grid grid-cols-[auto_1fr] gap-6 border-t border-ink-line py-8 first:border-t-0 sm:grid-cols-[140px_1fr]">
                  <span className="font-mono text-xs text-paper-faint">{e.period}</span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-paper">
                      {e.role} <span className="text-paper-muted">· {e.org}</span>
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-paper-muted">
                      {e.achievements.map((a) => (
                        <li key={a} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-gold" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="h-full rounded-2xl border border-ink-line bg-ink-surface p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              Education
            </span>
            <h3 className="mt-3 font-display text-2xl font-medium text-paper">
              {education.school}
            </h3>
            <p className="mt-1 text-sm text-paper-muted">{education.degree}</p>
            <p className="mt-1 font-mono text-xs text-paper-faint">{education.period}</p>

            <div className="mt-6 rounded-xl border border-ink-line bg-ink px-4 py-3">
              <p className="font-mono text-[11px] uppercase tracking-widest text-paper-faint">
                Certification
              </p>
              <p className="mt-1 text-sm text-paper">
                {education.cert.name} — <span className="text-gold">{education.cert.result}</span>
              </p>
            </div>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-paper-faint">
              Relevant coursework
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {education.courses.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-ink-line px-3 py-1 text-xs text-paper-muted"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
