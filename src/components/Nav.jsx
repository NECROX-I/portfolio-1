// src/components/Nav.jsx

import { profile } from '../data'

export default function Nav() {
  return (
    <header className="nav-wrap">
      <nav className="nav">
        <a href="#" className="brand">
          <span className="brand-mark">RN</span>
          <span>Rahul Naskar</span>
        </a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}