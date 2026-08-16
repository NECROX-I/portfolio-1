// src/components/Projects.jsx

import { projects } from '../data'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="work" className="section projects-section">
      <div className="section-container">

        <div className="section-heading">
          <div>
            <p className="section-label">01 / Selected Work</p>
            <h2>Projects built to solve real problems.</h2>
          </div>

          <p className="section-description">
            Backend systems, infrastructure, developer tooling, and
            full-stack products built with production-oriented technologies.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  )
}