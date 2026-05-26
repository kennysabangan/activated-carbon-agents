"use client";

import { useEffect } from "react";

export default function Animations() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(
      ".fade-in, .fade-in-left, .fade-in-right"
    );
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
