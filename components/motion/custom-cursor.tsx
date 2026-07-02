"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const cx = useSpring(x, springConfig);
  const cy = useSpring(y, springConfig);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 10);
      y.set(e.clientY - 10);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(
        !!target.closest("a, button, [role='button'], input, textarea, select")
      );
    };
    const leave = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [isVisible, x, y]);

  if (isTouch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden rounded-full border border-gold mix-blend-difference lg:block"
      style={{
        x: cx,
        y: cy,
        width: isPointer ? 40 : 20,
        height: isPointer ? 40 : 20,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ width: 0.25, height: 0.25 }}
    />
  );
}
