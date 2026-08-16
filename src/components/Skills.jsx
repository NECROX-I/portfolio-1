// src/components/Skills.jsx

import { skillGroups } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">

        <div className="section-heading">
          <div>
            <p className="section-label">02 / Technical Expertise</p>
            <h2>A stack built around backend engineering.</h2>
          </div>

          <p className="section-description">
            Focused on APIs, distributed systems, cloud infrastructure,
            data persistence, automation, and reliable software delivery.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-group" key={group.title}>
              <div className="skill-index">
                0{index + 1}
              </div>

              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>

                <div className="skill-list">
                  {group.items.map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}