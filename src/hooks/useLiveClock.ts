import { useEffect, useState } from "react";

function formatTime(timeZone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone,
  }).format(new Date());
}

/** Live-updating clock string (e.g. "10:42 PM") for the given IANA time zone. */
export function useLiveClock(timeZone: string): string {
  const [time, setTime] = useState(() => formatTime(timeZone));

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(timeZone)), 15_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}
