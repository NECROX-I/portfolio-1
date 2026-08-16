// src/components/ProjectCard.jsx

const STATUS = {
  live: 'LIVE',
  github: 'SOURCE',
  npm: 'NPM',
}

export default function ProjectCard({ project }) {
  return (
    <article
      className={`project-card ${
        project.featured ? 'project-featured' : ''
      }`}
    >
      <div className="project-top">
        <span className="project-number">
          {project.number}
        </span>

        <span className="project-status">
          <i />
          {STATUS[project.status]}
        </span>
      </div>

      <div className="project-heading">
        <p>{project.type}</p>
        <h3>{project.title}</h3>
      </div>

      <p className="project-description">
        {project.description}
      </p>

      <div className="project-highlights">
        {project.highlights.map(highlight => (
          <div key={highlight}>
            <span>+</span>
            {highlight}
          </div>
        ))}
      </div>

      <div className="project-footer">
        <div className="project-stack">
          {project.stack.map(tech => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-outcome">
          <span>OUTCOME</span>
          <strong>{project.outcome}</strong>
        </div>

        <div className="project-links">
          {project.links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
              <span>↗</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}