import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "../../data/portfolio";
import { useActiveSection } from "../../hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a
          className="logo"
          href="#top"
          onClick={closeMenu}
          aria-label={`${profile.name} — home`}
        >
          RN<span>.</span>
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={closeMenu}
              className={active === item.id ? "active" : undefined}
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
          <a
            className="nav-resume"
            href={profile.resume}
            download
            onClick={closeMenu}
          >
            Resume <ArrowUpRight size={14} />
          </a>
        </div>
      </nav>
    </header>
  );
}
