"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import TiltCard from "./ui/TiltCard";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <section id="work" className="relative mx-auto max-w-5xl px-6 py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've made an impact"
        subtitle="From banking to telecom to AI — a deliberately diverse path, always shipping."
      />

      <div className="relative">
        {/* Vertical timeline spine */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-cyan/60 via-violet-glow/40 to-transparent md:left-1/2" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`relative pl-10 md:w-1/2 md:pl-0 ${
                i % 2 === 0
                  ? "md:pr-12 md:text-left"
                  : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Node */}
              <span
                className="absolute left-0 top-6 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full md:left-auto"
                style={{
                  backgroundColor: exp.color,
                  boxShadow: `0 0 16px ${exp.color}`,
                  ...(i % 2 === 0
                    ? { right: "-1.5rem", left: "auto" }
                    : { left: "-1.5rem" }),
                }}
              />

              <TiltCard glow={exp.color} intensity={6}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: exp.color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-bold">
                      {exp.company}
                    </h3>
                    <p className="text-white/60">{exp.role}</p>
                  </div>
                  <span className="glass whitespace-nowrap rounded-full px-3 py-1 text-xs text-white/70">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {exp.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-white/70">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: exp.color }}
                      />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
