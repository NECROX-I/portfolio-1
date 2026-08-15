import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Floating scroll-to-top control that appears once the hero has scrolled out of view. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      className={`back-to-top ${visible ? "visible" : ""}`}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={18} />
    </a>
  );
}
