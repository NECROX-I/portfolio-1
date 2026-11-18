import { useState } from 'react'
import { projects } from '../data'
import ProjectCard from './ProjectCard'
import Section from './Section'

// Filter buttons are built from the `tags` in data/projects.js.
const FILTERS = ['All', ...new Set(projects.flatMap(p => p.tags))]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const list = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter))
  return (
    <Section id="projects" title="Projects">
      <div className="filters" role="group" aria-label="Filter projects">
        {FILTERS.map(f => (
          <button key={f} className="filter" aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>
      <div className="grid" key={filter}>
        {list.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </Section>
  )
}
