import { useEffect } from "react";

/**
 * Fades/slides in any element marked with [data-reveal] as it enters the
 * viewport. Runs once at the app root — safe to call even though the
 * marked elements live in child components, since effects fire after the
 * full tree has committed.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
