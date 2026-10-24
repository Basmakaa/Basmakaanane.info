"use client";

import Reveal from "./ui/Reveal";
import { profile } from "@/lib/data";

const links = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "LaverageAI", href: "https://laverageai.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 bg-night text-paper">
      <div className="mx-auto max-w-page px-5 py-28 md:px-10 md:py-36">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-paper/45">
            05 — Contact
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(3.2rem,8vw,7rem)] font-light leading-[0.9] tracking-[-0.04em]">
            If the work resonates, write to me.
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-paper/65">
            A workshop, a collaboration, an engineering conversation, or a
            simple introduction.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-12 block max-w-full break-words font-display text-[clamp(1.7rem,4.4vw,3.6rem)] font-light leading-tight tracking-tight text-paper transition-colors hover:text-clay"
          >
            {profile.email}
          </a>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-paper/60">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-transparent pb-0.5 transition-colors hover:border-clay hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
