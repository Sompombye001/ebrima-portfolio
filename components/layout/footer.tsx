import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line">
      <div className="container-page py-20">
        <div className="flex flex-col gap-6 border-b border-ink-line pb-16 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl font-medium tracking-tightest text-paper sm:text-6xl">
            Let&apos;s build something
            <br />
            that has to <span className="italic text-gold">work.</span>
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 font-body text-sm text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Start a conversation
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-6 pt-8 text-sm text-paper-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built in {profile.location}.
          </p>
          <div className="flex gap-6">
            {profile.socials.map((s) => (
              <a
                key={s.label}   
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-paper"
              >
                {s.label}
              </a>
            ))}
            <a href={`mailto:ebr1ma.smp@gmail.com`} className="transition-colors hover:text-paper">
              ebr1ma.smp@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
