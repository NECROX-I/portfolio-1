import { navLinks } from '../data'
import useTheme from '../hooks/useTheme'
import { ext, NewTabHint } from './ui'

export default function Header() {
  const [theme, toggle] = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a href="#top" className="brand" aria-label="Back to top">~/rahul<b>_</b></a>
        <nav className="nav" aria-label="Sections">
          {navLinks.map(l => (
            <a key={l.id} href={l.href ?? `#${l.id}`} {...(l.out ? ext : {})}>
              {l.label}{l.out && <NewTabHint />}
            </a>
          ))}
        </nav>
        <button className="icon-btn" onClick={toggle} aria-label={`Switch to ${next} theme`}>
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </div>
    </header>
  )
}
