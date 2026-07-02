import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import Reveal from "@/components/motion/reveal";

const featured = projects.filter((p) => p.featured).slice(0, 4);

export default function FeaturedProjects() {
  return (
    <section className="container-page py-28">
      <Reveal>
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              Selected work
            </span>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tightest text-paper sm:text-5xl">
              Systems in production.
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 font-body text-sm text-paper-muted transition-colors hover:text-gold"
          >
            All projects
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <Link
              href={`/projects/${p.slug}`}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-ink-line bg-ink-surface p-8 transition-colors hover:border-gold/50"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/0 blur-3xl transition-all duration-700 group-hover:bg-gold/10" />
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-paper-faint">
                    {p.category}
                  </span>
                  <span
                    className={
                      p.status === "Deployed"
                        ? "rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-gold"
                        : "rounded-full border border-ink-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-paper-faint"
                    }
                  >
                    {p.status}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-medium text-paper transition-colors group-hover:text-gold">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm text-paper-muted">{p.overview}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {p.stack.slice(0, 6).map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-ink-line px-3 py-1 font-mono text-[11px] text-paper-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
