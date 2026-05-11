import { useState, useEffect } from "react";
import "./styles/global.css";

import Navbar                from "./components/layout/Navbar";
import Footer                from "./components/layout/Footer";
import FeaturedBar           from "./components/sections/FeaturedBar";
import Hero                  from "./components/sections/Hero";
import Projects              from "./components/sections/Projects";
import Skills                from "./components/sections/Skills";
import InitiativesServices   from "./components/sections/InitiativesServices";
import Experience            from "./components/sections/Experience";
import Extras                from "./components/sections/Extras";
import Contact               from "./components/sections/Contact";

const HR = () => (
  <hr style={{ border:"none", borderTop:"1px solid var(--border)", margin:"0 5vw" }} />
);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(d => !d)} />
      <FeaturedBar />

      {/* 1. Introduction */}
      <Hero />
      <HR />

      {/* 2. Things I've Built */}
      <Projects />
      <HR />

      {/* 3. Proficient In (standalone) */}
      <Skills />
      <HR />

      {/* 4. Initiatives + Services I Offer (same section) */}
      <InitiativesServices />
      <HR />

      {/* 5. Work Journey (standalone) */}
      <Experience />
      <HR />

      {/* 6. Extra-curriculars */}
      <Extras />
      <HR />

      {/* 7. Contact */}
      <Contact />
      <Footer />
    </>
  );
}
