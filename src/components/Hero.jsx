// src/components/Hero.jsx

import { profile } from '../data'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" />

      <div className="hero-inner">
        <div className="hero-status">
          <span />
          {profile.availability}
        </div>

        <p className="hero-kicker">
          SOFTWARE ENGINEER / BACKEND / CLOUD INFRASTRUCTURE
        </p>

        <h1>
          Building backend systems
          <br />
          <span>that scale beyond the demo.</span>
        </h1>

        <p className="hero-description">
          {profile.tagline}
        </p>

        <div className="hero-actions">
          <a href="#work" className="button button-primary">
            View selected work
            <span>↓</span>
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="button button-secondary"
          >
            Get in touch
            <span>↗</span>
          </a>
        </div>

        <div className="hero-meta">
          <div>
            <span>LOCATION</span>
            <strong>{profile.location}</strong>
          </div>

          <div>
            <span>GRADUATION</span>
            <strong>{profile.graduation}</strong>
          </div>

          <div>
            <span>OPEN SOURCE</span>
            <strong>{profile.npmDownloads} weekly npm downloads</strong>
          </div>

          <div>
            <span>RELOCATION</span>
            <strong>{profile.relocation}</strong>
          </div>
        </div>
      </div>
    </section>
  )
}