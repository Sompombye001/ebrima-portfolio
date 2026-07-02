import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[80svh] flex-col items-center justify-center text-center">
      <span className="font-mono text-xs uppercase tracking-widest text-gold">
        404
      </span>
      <h1 className="mt-4 font-display text-5xl font-medium tracking-tightest text-paper sm:text-6xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-sm text-paper-muted">
        The page you&apos;re looking for was moved, renamed, or never built.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink-line px-6 py-3 font-body text-sm text-paper transition-colors hover:border-gold hover:text-gold"
      >
        <ArrowLeft size={16} />
        Back to home
      </Link>
    </section>
  );
}
