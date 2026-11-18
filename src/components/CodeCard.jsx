import { profile } from '../data'

// The code-style profile card. Values come from data/profile.js.
const Str = ({ children }) => <span className="t-str">“{children}”</span>
const arr = items => <>[{items.map((x, i) => <span key={x}>{i > 0 && ', '}<Str>{x}</Str></span>)}]</>

export default function CodeCard() {
  return (
    <figure className="code" aria-label="Profile summary">
      <figcaption><i /><i /><i /><span>profile.ts</span></figcaption>
      <pre><code>
        <span className="ln"><span className="t-k">const</span> <span className="t-v">developer</span> = {'{'}</span>
        <span className="ln ind"><span className="t-p">role</span>: <Str>{profile.role}</Str>,</span>
        <span className="ln ind"><span className="t-p">stack</span>: {arr(profile.stack)},</span>
        <span className="ln ind"><span className="t-p">focus</span>: {arr(profile.focus)},</span>
        <span className="ln ind"><span className="t-p">location</span>: <Str>{profile.location}</Str>,</span>
        <span className="ln ind"><span className="t-p">openToWork</span>: <span className="t-k">true</span>,</span>
        <span className="ln">{'}'}</span>
      </code></pre>
    </figure>
  )
}
