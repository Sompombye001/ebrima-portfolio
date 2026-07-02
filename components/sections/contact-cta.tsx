import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/reveal";

export default function ContactCta() {
  return (
    <section className="container-page pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-ink-line bg-ink-surface px-8 py-20 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-aurora-gold" />
          <span className="relative font-mono text-xs uppercase tracking-widest text-gold">
            Currently open to new projects
          </span>
          <h2 className="relative mx-auto mt-5 max-w-2xl text-balance font-display text-4xl font-medium tracking-tightest text-paper sm:text-6xl">
            Have a system that needs building?
          </h2>
          <p className="relative mx-auto mt-5 max-w-md text-paper-muted">
            Commercial, institutional, or government-grade — if it needs to be
            correct and it needs to ship, let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="group relative mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 font-body text-sm font-medium text-ink transition-transform hover:scale-105"
          >
            Get in touch
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
