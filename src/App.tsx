import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { SkipLink } from "./components/layout/SkipLink";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { BackToTop } from "./components/layout/BackToTop";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { useScrollReveal } from "./hooks/useScrollReveal";
import "./styles/globals.css";

function App() {
  useScrollReveal();

  return (
    <div className="site">
      <SkipLink />
      <ScrollProgress />
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
