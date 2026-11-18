import useReveal from '../hooks/useReveal'

// Wrapper for every section: heading, optional note, fade-in on scroll.
export default function Section({ id, title, note, children }) {
  const ref = useReveal()
  return (
    <section className="section wrap" id={id} ref={ref}>
      <h2><span>#</span> {title}</h2>
      {note && <p className="section-note">{note}</p>}
      {children}
    </section>
  )
}
