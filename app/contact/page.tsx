import type { Metadata } from "next";
import { Download, MapPin } from "lucide-react";
import { profile } from "@/data/content";
import Reveal from "@/components/motion/reveal";
import ContactForm from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} to discuss a project.`,
};

export default function ContactPage() {
  return (
    <section className="container-page pb-28 pt-40">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              Contact
            </span>
            <h1 className="mt-4 text-balance font-display text-5xl font-medium tracking-tightest text-paper sm:text-6xl">
              Tell me what you&apos;re building.
            </h1>
            <p className="mt-6 max-w-md text-lg text-paper-muted">
              Whether it&apos;s an institutional system, a commercial platform, or
              something in between — I read every message myself.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-sm text-paper-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
                {profile.availability}
              </div>
              <div className="flex items-center gap-3 text-sm text-paper-muted">
                <MapPin size={16} className="text-paper-faint" />
                {profile.location}
              </div>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 text-sm text-paper-muted transition-colors hover:text-gold"
              >
                <Download size={16} />
                Download resume
              </a>
            </div>

            <div className="mt-10 flex gap-6 border-t border-ink-line pt-8">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-paper-muted transition-colors hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="rounded-2xl border border-ink-line bg-ink-surface p-8 sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
