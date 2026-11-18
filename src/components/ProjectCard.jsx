import { ext, NewTabHint } from './ui'

// One repo-style card. Fields come from data/projects.js.
export default function ProjectCard({ project: p }) {
  return (
    <article className="card repo">
      <p className="repo-type">{p.type}</p>
      <h3 className="repo-name">{p.id}</h3>
      <p className="repo-sum">{p.summary}</p>
      <ul className="chips">{p.stack.map(s => <li key={s}>{s}</li>)}</ul>
      <details className="more">
        <summary>Details</summary>
        <ul className="bullets">{p.highlights.map(h => <li key={h}>{h}</li>)}</ul>
      </details>
      <div className="repo-links">
        {p.links.map(l => (
          <a key={l.label} href={l.href} {...ext}>{l.label} ↗<NewTabHint /></a>
        ))}
      </div>
    </article>
  )
}
