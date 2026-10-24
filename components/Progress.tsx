"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function Progress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-clay"
    />
  );
}
