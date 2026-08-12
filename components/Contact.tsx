"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import MagneticButton from "./ui/MagneticButton";

const socials = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "Email", href: `mailto:${profile.email}` },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-12 text-center sm:p-16"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]" />

        <motion.span
          animate={{ rotate: [0, 14, -14, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="inline-block text-5xl"
        >
          👋
        </motion.span>

        <h2 className="mt-6 font-display text-4xl font-bold sm:text-5xl">
          Let&apos;s build something{" "}
          <span className="text-gradient">meaningful</span>.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-white/60">
          I&apos;m always open to opportunities, collaborations, or a friendly
          chat over coffee ☕. My inbox is open.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="bg-gradient-to-r from-violet-glow to-accent-cyan text-white shadow-[0_0_30px_-6px_rgba(124,58,237,0.7)]"
          >
            Get in touch →
          </MagneticButton>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-white/50">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
