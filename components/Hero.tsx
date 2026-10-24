"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";
import { disciplines, profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

function Rise({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <span className={`block ${className ?? ""}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="block">
        {text.split("").map((ch, i) => (
          <span key={`${ch}-${i}`} className="inline-block overflow-hidden align-bottom">
            <motion.span
              className="inline-block"
              initial={reduce ? false : { y: "115%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: delay + i * 0.04, ease }}
            >
              {ch}
            </motion.span>
          </span>
        ))}
      </span>
    </span>
  );
}

function useTorontoTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-CA", {
        hour: "numeric",
        minute: "2-digit",
        hour12: false,
        timeZone: profile.timezone,
      }).format(new Date());

    setTime(format());
    const id = window.setInterval(() => setTime(format()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

export default function Hero() {
  const reduce = useReducedMotion();
  const time = useTorontoTime();
  const loop = [...disciplines, ...disciplines];

  return (
    <section
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-24"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(540px circle at var(--mx, 70%) var(--my, 28%), rgba(194,77,44,0.18), transparent 60%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-[18%] top-[16%] hidden aspect-square w-[46vw] max-w-[620px] lg:block"
      >
        <motion.div
          className="relative h-full w-full rounded-full border border-ink/10"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-clay" />
          <span className="absolute inset-[14%] rounded-full border border-ink/10" />
        </motion.div>
      </div>

      <div className="relative mx-auto flex w-full max-w-page flex-1 flex-col justify-end px-5 pb-10 md:px-10 md:pb-14">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-6 text-[11px] uppercase tracking-[0.28em] text-muted"
        >
          <span className="text-clay">01</span>
          <span className="mx-3 text-ink/25">—</span>
          {profile.location}
          {time ? ` · ${time}` : ""}
        </motion.p>

        <h1 className="font-display text-[clamp(4.6rem,16vw,11.5rem)] font-light leading-[0.82] tracking-[-0.045em]">
          <Rise text={profile.first} delay={0.12} />
          <span className="mt-1 block italic text-clay">
            <Rise text={profile.last} delay={0.32} />
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="max-w-md font-display text-[clamp(1.35rem,2.6vw,2rem)] leading-snug text-ink-soft"
          >
            Engineer by training.
            <br />
            Entrepreneur by curiosity.
            <br />
            <span className="italic text-ink">Creative by nature.</span>
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.82, ease }}
            className="flex flex-wrap gap-3"
          >
            <MagneticButton href="#work" className="bg-ink text-paper hover:bg-clay">
              Selected work
              <Arrow />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="border border-ink/15 text-ink hover:border-clay hover:text-clay"
            >
              Say hello
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <div className="relative border-y border-line py-4">
        <div className="marquee">
          <div className="marquee-track">
            {loop.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-8 pr-8 text-[11px] uppercase tracking-[0.28em] text-muted"
              >
                {item}
                <span className="text-clay">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
