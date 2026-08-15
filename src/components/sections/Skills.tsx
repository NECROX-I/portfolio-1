import { skillGroups } from "../../data/portfolio";
import { SectionLabel } from "../ui/SectionLabel";

export function Skills() {
  return (
    <section id="skills" className="section container" data-reveal>
      <SectionLabel index="03" label="SKILLS" />
      <div className="skills-grid">
        <div>
          <h2>
            Technical
            <br />
            <em>expertise.</em>
          </h2>
          <p>
            Comfortable across application code, data, infrastructure, and the
            tooling around them.
          </p>
        </div>
        <div className="skill-list">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
