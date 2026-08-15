interface StatusDotProps {
  pulse?: boolean;
  className?: string;
}

/** Small signal-colored dot used for live/availability indicators across the site. */
export function StatusDot({ pulse = false, className = "" }: StatusDotProps) {
  const classes = ["status-dot", pulse ? "status-dot--pulse" : "", className]
    .filter(Boolean)
    .join(" ");
  return <span className={classes} aria-hidden="true" />;
}
