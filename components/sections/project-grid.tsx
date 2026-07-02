"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, LayoutGroup } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, projectCategories, type Project } from "@/data/content";
import { cn } from "@/lib/utils";

export default function ProjectGrid() {
  const [active, setActive] = useState<Project["category"] | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div>
      <LayoutGroup>
        <div className="flex flex-wrap gap-2">
          {["All", ...projectCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat as Project["category"] | "All")}
              className={cn(
                "relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors",
                active === cat ? "text-ink" : "text-paper-muted hover:text-paper"
              )}
            >
              {active === cat && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-gold"
                  transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          ))}
        </div>
      </LayoutGroup>

      <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <motion.div
            key={p.slug}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href={`/projects/${p.slug}`}
              className="group flex h-full flex-col justify-between rounded-2xl border border-ink-line bg-ink-surface p-7 transition-colors hover:border-gold/50"
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-paper-faint">
                    {p.category}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-paper-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
                  />
                </div>
                <h3 className="font-display text-xl font-medium leading-tight text-paper transition-colors group-hover:text-gold">
                  {p.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-paper-muted">{p.overview}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 3).map((s) => (
                  <span key={s} className="rounded-full border border-ink-line px-2.5 py-1 font-mono text-[10px] text-paper-muted">
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
