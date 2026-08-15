import { useScrollProgress } from "../../hooks/useScrollProgress";

/** Thin fixed bar at the very top of the viewport tracking scroll depth. */
export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
