"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Command } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-ink-line bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav className="container-page flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-display text-lg font-medium tracking-tight text-paper"
          >
            Ebrima Sompo<span className="text-gold">.</span>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative font-body text-sm text-paper-muted transition-colors hover:text-paper",
                  pathname === l.href && "text-paper"
                )}
              >
                {l.label}
                {pathname === l.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-px w-full bg-gold"
                  />
                )}
              </Link>
            ))}
            <div className="flex items-center gap-1.5 rounded-full border border-ink-line px-3 py-1.5 font-mono text-[11px] text-paper-muted">
              <Command size={12} />
              <span>K</span>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-gold px-5 py-2 font-body text-sm font-medium text-ink transition-transform hover:scale-105"
            >
              Let&apos;s talk
            </Link>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="text-paper md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-8 bg-ink px-8 md:hidden"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08 }}
              >
                <Link
                  href={l.href}
                  className="font-display text-4xl font-medium text-paper"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
