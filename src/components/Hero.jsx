import { profile } from '../data'
import CodeCard from './CodeCard'
import { ext, NewTabHint } from './ui'

export default function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-copy">
        <p className="status"><i aria-hidden="true" />{profile.status}</p>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="lede">{profile.intro}</p>
        <div className="actions">
          <a href="#contact" className="btn btn-primary">Get in touch</a>
          <a href={profile.github} className="btn" {...ext}>GitHub ↗<NewTabHint /></a>
          <a href={profile.resume} className="btn" {...ext}>Resume ↗<NewTabHint /></a>
        </div>
      </div>
      <CodeCard />
    </section>
  )
}
