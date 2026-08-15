import { projects } from "../../data/portfolio";
import { SectionLabel } from "../ui/SectionLabel";
import { ProjectCard } from "../projects/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="section container" data-reveal>
      <SectionLabel index="02" label="SELECTED PROJECTS" />
      <div className="section-intro">
        <h2>
          Selected <em>work.</em>
        </h2>
        <p>
          A selection of systems, products, and developer tools I have worked
          on.
        </p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}
