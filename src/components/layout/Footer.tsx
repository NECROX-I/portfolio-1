import { profile } from "../../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer container">
      <span>
        © {year} {profile.name}
      </span>
      <span>
        {profile.role} · {profile.location}
      </span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
