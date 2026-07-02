"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("es_loaded");
    if (alreadyLoaded) {
      setLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("es_loaded", "1");
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-4 bg-ink"
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <motion.span
            className="font-mono text-[11px] uppercase tracking-widest2 text-gold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Ebrima Sompo
          </motion.span>
          <div className="relative h-px w-40 overflow-hidden bg-ink-line">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gold"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
