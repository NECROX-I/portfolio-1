import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently "active" for scrollspy-style nav
 * highlighting. A section is considered active while it crosses a thin
 * band near the vertical center of the viewport.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
