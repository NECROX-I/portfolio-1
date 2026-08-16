// src/components/Education.jsx

import { education } from '../data'

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-container">

        <div className="section-heading">
          <div>
            <p className="section-label">03 / Education</p>
            <h2>Computer Science foundation.</h2>
          </div>
        </div>

        <div className="education-card">
          <div className="education-year">
            {education.year}
          </div>

          <div className="education-main">
            <p>SWAMI VIVEKANANDA UNIVERSITY</p>
            <h3>{education.degree}</h3>
            <span>{education.specialization}</span>
          </div>

          <div className="education-score">
            <span>CGPA</span>
            <strong>{education.cgpa}</strong>
          </div>
        </div>

      </div>
    </section>
  )
}