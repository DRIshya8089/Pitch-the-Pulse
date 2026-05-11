import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "../../data/siteData";

const NAV_LINKS = [
  { label: "Home",        href: "#home" },
  { label: "Projects",    href: "#projects" },
  { label: "Initiatives", href: "#services" },
  { label: "Experience",  href: "#experience" },
  { label: "Extras",      href: "#extras" },
  { label: "Contact",     href: "#contact" },
];

function SunIcon()  { return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>; }
function MoonIcon() { return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>; }

export default function Navbar({ darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        backdropFilter: "blur(18px)",
        background: darkMode ? "rgba(15,23,42,.95)" : "rgba(255,255,255,.92)",
        borderBottom: "1px solid var(--border)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,.1)" : "none",
        transition: "box-shadow .3s, background .3s",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>

        {/* ── Gradient site title ── */}
        <a href="#home" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.25rem",
            background: "linear-gradient(90deg, #3b82f6, #22c55e)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            letterSpacing: "-.02em",
          }}>
            {SITE.siteTitle}
          </span>
        </a>

        {/* ── Desktop links + resume + dark toggle ── */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
              style={{ padding: "6px 13px", borderRadius: "var(--radius-sm)", fontSize: ".87rem", fontWeight: 500, color: "var(--dark)", transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--accent-light)"; e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--dark)"; }}
            >{l.label}</a>
          ))}
          <a href={SITE.resumeLink} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginLeft: 10, padding: "8px 18px" }}>
            View Resume
          </a>
          <button onClick={toggleDark}
            style={{ marginLeft: 8, width: 38, height: 38, borderRadius: "50%", border: "1px solid var(--border)", background: "var(--off-white)", color: "var(--dark)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .25s" }}>
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* ── Mobile: dark toggle + hamburger ONLY (no duplicate) ── */}
        <div className="nav-mobile" style={{ display: "none", gap: 8, alignItems: "center" }}>
          <button onClick={toggleDark}
            style={{ background: "none", border: "1px solid var(--border)", borderRadius: "50%", width: 34, height: 34, cursor: "pointer", color: "var(--dark)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
            style={{ background: "none", border: "1px solid var(--border)", borderRadius: 8, cursor: "pointer", padding: "7px 9px", display: "flex", flexDirection: "column", gap: 5 }}>
            {[0,1,2].map(i => (
              <div key={i} style={{ width: 20, height: 2, background: "var(--dark)", borderRadius: 2, transition: "all .3s",
                transform: menuOpen && i===0 ? "rotate(45deg) translate(5px,5px)" : menuOpen && i===2 ? "rotate(-45deg) translate(5px,-5px)" : "",
                opacity: menuOpen && i===1 ? 0 : 1 }} />
            ))}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }}
            style={{ overflow: "hidden", borderTop: "1px solid var(--border)", background: "var(--white)" }}>
            <div style={{ padding: "12px 24px 20px", display: "flex", flexDirection: "column", gap: 4 }}>
              {NAV_LINKS.map(l => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                  style={{ padding: "10px 14px", borderRadius: "var(--radius-sm)", fontWeight: 500, color: "var(--dark)" }}>{l.label}</a>
              ))}
              <a href={SITE.resumeLink} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: 8 }}>View Resume</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}
