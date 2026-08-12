"use client";

import { motion } from "framer-motion";
import { passions } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";

export default function Passions() {
  return (
    <section id="passions" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Beyond The Code"
        title="What lights me up"
        subtitle="I believe the best engineers are whole people. Here's what fuels my curiosity outside the terminal."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {passions.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40, rotateX: -8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          >
            <div
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
              style={{ background: p.accent }}
            />
            <div className="relative">
              <span className="text-5xl">{p.emoji}</span>
              <h3 className="mt-5 font-display text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-white/60">
                {p.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
