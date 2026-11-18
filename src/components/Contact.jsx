import { contacts, contactNote, profile } from '../data'
import useCopy from '../hooks/useCopy'
import Section from './Section'
import { ext, NewTabHint } from './ui'

export default function Contact() {
  const [copied, copy] = useCopy()
  const copyEmail = async () => {
    if (!(await copy(profile.email))) window.location.href = `mailto:${profile.email}`
  }
  return (
    <Section id="contact" title="Contact" note={contactNote}>
      <ul className="contacts">
        {contacts.map(c => (
          <li key={c.label} className={`contact ${c.wide ? 'wide' : ''}`}>
            <a className="contact-link" href={c.href} {...(c.out ? ext : {})}>
              <span className="contact-label">{c.label}</span>
              <span className="contact-value">{c.value}</span>
              <span className="arrow" aria-hidden="true">{c.out ? '↗' : '→'}</span>
              {c.out && <NewTabHint />}
            </a>
            {c.copy && (
              <button className="copy" onClick={copyEmail} aria-live="polite">{copied ? 'Copied ✓' : 'Copy'}</button>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}
