import { ArrowUpRight } from "lucide-react";
import { profile } from "../../data/portfolio";
import { useLiveClock } from "../../hooks/useLiveClock";
import { Button } from "../ui/Button";
import { StatusDot } from "../ui/StatusDot";

export function Hero() {
  const time = useLiveClock(profile.timeZone);

  return (
    <section className="hero container" data-reveal>
      <div className="hero-copy">
        <p className="eyebrow">
          <StatusDot />
          SOFTWARE ENGINEER · KOLKATA, INDIA
        </p>
        <h1>
          Engineering software
          <br />
          <em>built to last.</em>
        </h1>
        <p className="hero-text">
          {profile.tagline} My work sits at the intersection of backend
          engineering, cloud infrastructure, and thoughtful product development.
        </p>
        <div className="hero-actions">
          <Button href="#projects">
            View my work <ArrowUpRight size={15} />
          </Button>
          <Button variant="secondary" href={`mailto:${profile.email}`}>
            Get in touch
          </Button>
        </div>
      </div>

      <aside className="status-panel" aria-label="Availability status">
        <div className="status-panel-live">
          <StatusDot pulse />
          <span>{profile.availability}</span>
        </div>
        <dl className="status-panel-facts">
          <div>
            <dt>Location</dt>
            <dd>
              {profile.location} · {time} IST
            </dd>
          </div>
          <div>
            <dt>Graduating</dt>
            <dd>{profile.graduation}</dd>
          </div>
          <div>
            <dt>Relocation</dt>
            <dd>{profile.relocation}</dd>
          </div>
        </dl>
        <div className="hero-meta">
          <span>01</span>
          <span>Status</span>
        </div>
      </aside>
    </section>
  );
}
