// src/App.jsx

import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="site-shell">
      <Nav />

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
      </main>

      <Footer />
    </div>
  )
}