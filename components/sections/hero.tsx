"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import { profile, projects } from "@/data/content";

const systemLog = projects
  .filter((p) => p.status === "Deployed" || p.featured)
  .map((p) => ({ name: p.name, status: p.status }));

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [logIndex, setLogIndex] = useState(0);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { damping: 20, stiffness: 150 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { damping: 20, stiffness: 150 });

  useEffect(() => {
    const id = setInterval(() => {
      setLogIndex((i) => (i + 1) % systemLog.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const current = systemLog[logIndex];

  return (
    <section
      ref={ref}
      onMouseMove={handleMouse}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-20"
    >
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0 bg-aurora-gold" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#F5F3EE 1px, transparent 1px), linear-gradient(90deg, #F5F3EE 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container-page relative">
        {/* Floating social icons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute -left-2 top-0 hidden flex-col gap-5 lg:flex"
        >
          {[Github].map((Icon, i) => (
            <a
              key={i}
              href={profile.socials[i]?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper-muted transition-colors hover:text-gold"
              aria-label={profile.socials[i]?.label}
            >
              <Icon size={18} />
            </a>
          ))}
          <div className="mx-auto h-16 w-px bg-ink-line" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="status-chip mb-8 w-fit"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          {profile.availability} — {profile.location}
        </motion.div>

        <motion.div
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl font-display text-[13vw] font-medium leading-[0.95] tracking-tightest text-paper sm:text-[9vw] lg:text-[6.4vw]"
          >
            Software for things
            <br />
            that can&apos;t <span className="italic text-gold gold-glow-text">afford to break.</span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8 max-w-xl text-balance font-body text-lg text-paper-muted"
        >
          I&apos;m {profile.name}, an aspiring software engineer in {profile.location} building
          demo production systems for government, banking, and commercial enterprises —
          alongside the CS degree that put me here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 font-body text-sm font-medium text-ink transition-transform hover:scale-105"
          >
            View systems built
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink-line px-6 py-3.5 font-body text-sm text-paper transition-colors hover:border-gold hover:text-gold"
          >
            Start a project
          </Link>
        </motion.div>

        {/* Live systems console — signature element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-16 max-w-md rounded-2xl border border-ink-line bg-ink-surface/60 p-4 backdrop-blur"
        >
          <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-paper-faint">
            <span>systems.log</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-gold" />
              live
            </span>
          </div>
          <motion.div
            key={logIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between gap-4 font-mono text-xs text-paper-muted"
          >
            <span className="truncate">{current?.name}</span>
            <span
              className={
                current?.status === "Deployed"
                  ? "shrink-0 text-gold"
                  : "shrink-0 text-paper-faint"
              }
            >
              {current?.status?.toUpperCase()}
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-paper-faint"
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
