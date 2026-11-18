import { skillGroups } from '../data'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills">
        {skillGroups.map(g => (
          <div key={g.title} className="skill">
            <h3>{g.title}</h3>
            <ul className="chips">{g.items.map(s => <li key={s}>{s}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
