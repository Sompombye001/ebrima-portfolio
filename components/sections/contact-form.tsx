"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { profile } from "@/data/content";

type Status = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email";
    if (!message) nextErrors.message = "Tell me a bit about the project";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // Static form — wire to an email/API endpoint when deploying.
    setTimeout(() => setStatus("success"), 900);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-4 rounded-2xl border border-gold/30 bg-gold/5 p-10"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-ink">
          <Check size={18} />
        </span>
        <h3 className="font-display text-2xl font-medium text-paper">Message sent.</h3>
        <p className="text-paper-muted">
          Thanks for reaching out — I&apos;ll reply at the email you provided within a day or two.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <Field
        label="Name"
        name="name"
        placeholder="Your name"
        error={errors.name}
      />
      <Field
        label="Email"
        name="email"
        type="email"
        placeholder="you@company.com"
        error={errors.email}
      />
      <div>
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-paper-faint">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What are you building, and what does it need to do?"
          className="mt-2 w-full resize-none rounded-xl border border-ink-line bg-ink-surface px-4 py-3.5 text-paper placeholder:text-paper-faint focus:border-gold"
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-1.5 text-xs text-gold"
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-body text-sm font-medium text-ink transition-transform hover:scale-105 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        {status !== "submitting" && (
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </button>

      <p className="text-xs text-paper-faint">
        Prefer email? Reach me directly at{" "}
        <a href={`mailto:${profile.email}`} className="text-gold underline underline-offset-4">
          {profile.email}
        </a>
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-widest text-paper-faint">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-ink-line bg-ink-surface px-4 py-3.5 text-paper placeholder:text-paper-faint focus:border-gold"
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1.5 text-xs text-gold"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
