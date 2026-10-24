"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      smoothWheel: false,
      syncTouch: false,
    });
    lenisRef.current = lenis;

    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"], a[href^="/#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      let id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      if (id.startsWith("/#")) {
        if (window.location.pathname !== "/") return;
        id = id.slice(1);
      }
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -88, duration: 0.45 });
      history.replaceState(null, "", id);
    }

    document.addEventListener("click", onClick);

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    const lenis = lenisRef.current;

    const go = () => {
      if (!hash) {
        if (lenis) lenis.scrollTo(0, { immediate: true });
        else window.scrollTo(0, 0);
        return;
      }
      const target = document.querySelector(hash);
      if (!target) return;
      if (lenis) lenis.scrollTo(target as HTMLElement, { offset: -88, duration: 0.45 });
      else target.scrollIntoView();
    };

    const id = window.setTimeout(go, 40);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return <>{children}</>;
}
