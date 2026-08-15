import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types";
import { Tag } from "../ui/Tag";
import { StatusDot } from "../ui/StatusDot";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project">
      <div className="project-number">{project.number}</div>

      <div className="project-main">
        <div className="project-title-row">
          <div>
            <p className="project-type">{project.type}</p>
            <h3>{project.title}</h3>
          </div>
          <ArrowUpRight
            className="project-arrow"
            size={21}
            aria-hidden="true"
          />
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-bottom">
          <div className="tags">
            {project.stack.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <span className="outcome">{project.outcome}</span>
        </div>
      </div>

      <div className="project-links">
        {project.links.length > 0 ? (
          project.links.map((link) => {
            const isLive = link.label.toLowerCase() === "live";
            return (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                key={link.href}
              >
                {isLive && <StatusDot pulse />}
                {link.label} <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            );
          })
        ) : (
          <span className="project-links-empty">Details on request</span>
        )}
      </div>
    </article>
  );
}
