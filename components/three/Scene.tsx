"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";

const SceneBackground = dynamic(() => import("./SceneBackground"), {
  ssr: false,
});

export default function Scene() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.75], [1, 0.55, 0.2]);

  return (
    <motion.div
      aria-hidden
      style={{ opacity }}
      className="pointer-events-none fixed inset-0 -z-10"
    >
      <SceneBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/30 via-ink-950/40 to-ink-950" />
    </motion.div>
  );
}
