// src/components/Footer.jsx

import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div>
          <p className="footer-label">LET'S BUILD SOMETHING</p>
          <a
            href={`mailto:${profile.email}`}
            className="footer-email"
          >
            {profile.email}
          </a>
        </div>

        <div className="footer-links">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href={profile.resume} target="_blank" rel="noopener noreferrer">
            Resume ↗
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Rahul Naskar</span>
          <span>{profile.location}</span>
          <span>Available immediately</span>
        </div>

      </div>
    </footer>
  )
}