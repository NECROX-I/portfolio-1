import { education } from "../../data/portfolio";
import { SectionLabel } from "../ui/SectionLabel";

export function About() {
  return (
    <section id="about" className="section container" data-reveal>
      <SectionLabel index="01" label="ABOUT" />
      <div className="about-grid">
        <h2>
          Engineering with a
          <br />
          <em>systems mindset.</em>
        </h2>
        <div className="about-copy">
          <p>
            I specialize in turning ambiguous problems into dependable software — from
            designing APIs and database models to deploying services and
            thinking through failure modes.
          </p>
          <p>
            My strongest interests are backend systems, distributed
            applications, cloud infrastructure, developer tooling, and the
            engineering decisions that make products easier to operate.
          </p>
          <div className="education">
            <span>Education</span>
            <strong>{education.degree}</strong>
            <small>{education.institution}</small>
            <small>
              {education.specialization} · {education.year}
              {education.cgpa ? ` · CGPA ${education.cgpa}` : ""}
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
