import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "../../data/portfolio";
import { SectionLabel } from "../ui/SectionLabel";

export function Contact() {
  return (
    <section id="contact" className="contact-section container" data-reveal>
      <SectionLabel index="04" label="CONTACT" />
      <div className="contact-inner">
        <p className="eyebrow">OPEN TO NEW OPPORTUNITIES</p>
        <h2>
          Let's start a
          <br />
          <em>conversation.</em>
        </h2>
        <a className="email-link" href={`mailto:${profile.email}`}>
          {profile.email}
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <div className="socials">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a href={`mailto:${profile.email}`}>
            Email <Mail size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
