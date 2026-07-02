import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/content";
import Reveal from "@/components/motion/reveal";
import ContactCta from "@/components/sections/contact-cta";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.overview,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 2);

  return (
    <>
      <section className="container-page pb-16 pt-40">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-paper-muted transition-colors hover:text-gold"
          >
            <ArrowLeft size={14} />
            All projects
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              {project.category}
            </span>
            <span
              className={
                project.status === "Deployed"
                  ? "rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-gold"
                  : "rounded-full border border-ink-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-paper-faint"
              }
            >
              {project.status}
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl text-balance font-display text-5xl font-medium tracking-tightest text-paper sm:text-6xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg text-paper-muted">
            {project.overview}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-line px-5 py-2.5 font-body text-sm text-paper-faint">
              <Github size={15} />
              Private repository
            </span>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 font-body text-sm font-medium text-ink transition-transform hover:scale-105"
            >
              Discuss this build
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-28">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <Reveal>
            <div className="rounded-2xl border border-ink-line bg-ink-surface p-8">
              <h2 className="font-display text-2xl font-medium text-paper">
                Key features
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-paper-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-ink-line bg-ink-surface p-8">
              <h2 className="font-mono text-xs uppercase tracking-widest text-paper-faint">
                Tech stack
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-ink-line bg-ink px-3 py-1.5 font-mono text-xs text-paper-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-widest text-gold">
                More in {project.category}
              </span>
            </Reveal>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group flex flex-col justify-between rounded-2xl border border-ink-line bg-ink-surface p-7 transition-colors hover:border-gold/50"
                  >
                    <div>
                      <h3 className="font-display text-xl font-medium text-paper transition-colors group-hover:text-gold">
                        {p.name}
                      </h3>
                      <p className="mt-2 text-sm text-paper-muted">{p.overview}</p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="mt-6 self-end text-paper-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
                    />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </section>

      <ContactCta />
    </>
  );
}
