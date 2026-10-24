"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/data";

const links = [
  { href: "/#about", id: "about", label: "About" },
  { href: "/#work", id: "work", label: "Work" },
  { href: "/speaking", id: "speaking", label: "Speaking" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

function resolveHref(href: string, pathname: string) {
  if (pathname === "/" && href.startsWith("/#")) return href.slice(1);
  return href;
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (pathname !== "/") {
      setCurrent("");
      return;
    }
    const nodes = ["about", "work", "contact"]
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setCurrent(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  const onNight = open;
  const solid = scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid ? "border-b border-line bg-paper" : ""
        }`}
      >
        <nav className="mx-auto flex max-w-page items-center justify-between px-5 py-5 md:px-10">
          <a
            href={pathname === "/" ? "#content" : "/"}
            className={`font-display text-lg tracking-tight ${
              onNight ? "text-paper" : "text-ink"
            }`}
          >
            {profile.name}
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const active =
                link.id === "speaking"
                  ? pathname === "/speaking"
                  : pathname === "/" && current === link.id;
              return (
                <a
                  key={link.href}
                  href={resolveHref(link.href, pathname)}
                  className={`text-sm transition-colors ${
                    active ? "text-clay" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-5">
            <a
              href={resolveHref("/#contact", pathname)}
              className={`hidden text-sm md:inline ${
                onNight ? "text-paper" : "text-ink"
              }`}
            >
              Say hello
            </a>
            <button
              type="button"
              className={`text-sm md:hidden ${onNight ? "text-paper" : "text-ink"}`}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-night px-8 text-paper md:hidden"
          >
            <div className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={resolveHref(link.href, pathname)}
                  onClick={() => setOpen(false)}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.5 }}
                  className="font-display text-5xl tracking-tight"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
