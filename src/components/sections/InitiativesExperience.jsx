// InitiativesExperience.jsx
// Initiatives scrolling marquee (left→right, bounded in container) + Work Journey timeline
// Clicking logo → popup modal. Drashta popup shows 2 equal outline-only buttons.
// drashta2Link in siteData — shows "Not Yet Published" if "#" or missing.

import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../ui/Modal";
import { INITIATIVES, EXPERIENCE } from "../../data/siteData";

const typeStyle = {
  Internship: { bg:"#dbeafe", color:"#1d4ed8" },
  Research:   { bg:"#dcfce7", color:"#15803d" },
  Leadership: { bg:"#ffedd5", color:"#c2410c" },
};

export default function InitiativesExperience() {
  const [active, setActive] = useState(null);

  // Only 2× repetition — keeps marquee tighter, no excess logos showing
  const marqueeItems = [...INITIATIVES, ...INITIATIVES];

  return (
    <section id="experience" style={{ background:"var(--white)" }}>
      <div className="container">

        {/* ── Initiatives heading ── */}
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.5 }}
          style={{ marginBottom:32 }}
        >
          <h2 className="section-title">Initiatives</h2>
          <p className="section-sub">Organisations and projects I've been part of — click to learn more.</p>
        </motion.div>

        {/* ── Bounded marquee — contained inside container margins ── */}
        {/* Moves LEFT → RIGHT (reverse direction) */}
        <div style={{ position:"relative", overflow:"hidden", marginBottom:64 }}>
          {/* Fade edges */}
          <div style={{ position:"absolute", left:0, top:0, bottom:0, width:50,
            background:"linear-gradient(to right, var(--white), transparent)",
            zIndex:1, pointerEvents:"none" }} />
          <div style={{ position:"absolute", right:0, top:0, bottom:0, width:50,
            background:"linear-gradient(to left, var(--white), transparent)",
            zIndex:1, pointerEvents:"none" }} />

          <div style={{
            display:"inline-flex", gap:28,
            // direction: right (negative → zero), so translateX goes from -50% to 0
            animation:"logoScrollRTL 25s linear infinite",
            padding:"8px 0",
          }}>
            {marqueeItems.map((init, i) => (
              <motion.div
                key={i}
                whileHover={{ scale:1.1, y:-4 }}
                onClick={() => setActive(init)}
                style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10, cursor:"pointer", flexShrink:0 }}
              >
                <div style={{
                  width:100, height:100, borderRadius:22,
                  background:"var(--card-bg)", border:"1.5px solid var(--border)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  overflow:"hidden", boxShadow:"var(--shadow-sm)",
                }}>
                  {init.logoFile ? (
                    <img src={`/${init.logoFile}`} alt={init.name}
                      style={{ width:"80%", height:"80%", objectFit:"contain" }}
                      onError={e => { e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }} />
                  ) : null}
                  <span style={{ fontSize:"2.4rem", display:init.logoFile ? "none" : "flex",
                    alignItems:"center", justifyContent:"center" }}>
                    {init.logo}
                  </span>
                </div>
                <span style={{ fontSize:".8rem", fontWeight:700, color:"var(--dark)", textAlign:"center", maxWidth:100 }}>
                  {init.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Work Journey heading ── */}
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.5 }}
          style={{ marginBottom:36 }}
        >
          <h2 className="section-title">Work Journey</h2>
          <p className="section-sub">Roles that shaped my perspective.</p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position:"relative", paddingLeft:40 }}>
          {/* Vertical gradient — GREEN top → BLUE bottom */}
          <div style={{
            position:"absolute", left:9, top:0, bottom:0,
            width:3, borderRadius:2,
            background:"linear-gradient(to bottom, #22c55e, #3b82f6)",
          }} />

          {EXPERIENCE.map((exp, i) => {
            const tc = typeStyle[exp.type] || typeStyle.Internship;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity:0, x:-24 }}
                whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.55, delay: i * 0.15 }}
                style={{ position:"relative", marginBottom: i < EXPERIENCE.length - 1 ? 40 : 0 }}
              >
                <div style={{
                  position:"absolute", left:-32, top:18,
                  width:16, height:16, borderRadius:"50%",
                  background: i === 0 ? "#22c55e" : "#3b82f6",
                  boxShadow:`0 0 0 4px ${i === 0 ? "#dcfce7" : "#dbeafe"}`,
                  zIndex:1,
                }} />

                <div className="card" style={{ padding:"24px 28px" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:10, marginBottom:10 }}>
                    <div>
                      <h3 style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:"1.08rem", color:"var(--dark)", marginBottom:5 }}>
                        {exp.role}
                      </h3>
                      {/* Company — plain blue text, no badge */}
                      <span style={{ fontSize:".85rem", fontWeight:600, color:"var(--accent)" }}>
                        {exp.org}
                      </span>
                    </div>

                    <div style={{ display:"flex", gap:8, alignItems:"flex-start", flexWrap:"wrap" }}>
                      <span style={{
                        padding:"4px 12px", borderRadius:999,
                        fontSize:".72rem", fontWeight:800,
                        letterSpacing:".06em", textTransform:"uppercase",
                        background:tc.bg, color:tc.color,
                        border:`1.5px solid ${tc.color}33`,
                      }}>{exp.type}</span>
                      <span style={{
                        fontFamily:"var(--font-mono)", fontSize:".7rem",
                        color:"var(--muted)", padding:"4px 10px",
                        background:"var(--off-white)", borderRadius:8, whiteSpace:"nowrap",
                      }}>{exp.period}</span>
                    </div>
                  </div>

                  <p style={{ color:"var(--muted)", fontSize:".88rem", lineHeight:1.78, marginBottom:14 }}>
                    {exp.desc}
                  </p>

                  <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                    {exp.skills.map(s => (
                      <span key={s} style={{ padding:"3px 10px", borderRadius:7, fontSize:".72rem", fontWeight:600, background:"var(--off-white)", color:"var(--muted)" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Initiative detail popup ── */}
      <Modal isOpen={!!active} onClose={() => setActive(null)}>
        {active && (
          <>
            <div style={{ width:80, height:80, borderRadius:18, overflow:"hidden",
              border:"1.5px solid var(--border)", marginBottom:16,
              display:"flex", alignItems:"center", justifyContent:"center", background:"var(--off-white)" }}>
              {active.logoFile ? (
                <img src={`/${active.logoFile}`} alt={active.name}
                  style={{ width:"80%", height:"80%", objectFit:"contain" }}
                  onError={e => { e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }} />
              ) : null}
              <span style={{ fontSize:"2rem", display:active.logoFile ? "none" : "flex" }}>{active.logo}</span>
            </div>

            <h2 style={{ fontFamily:"var(--font-display)", fontWeight:800, fontSize:"1.5rem", marginBottom:12, color:"var(--dark)" }}>
              {active.name}
            </h2>
            <p style={{ color:"var(--muted)", lineHeight:1.8, marginBottom:20 }}>{active.desc}</p>

            {/* Drashta: 2 equal outline buttons for Ed 1 and Ed 2 */}
            {active.name === "Drashta" ? (
              <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                {/* Edition 1 — always available */}
                <a
                  href="https://online.fliphtml5.com/vwrdfv/fzqk/"
                  target="_blank" rel="noreferrer"
                  className="btn btn-outline"
                >
                  📖 Drashta 1.0
                </a>

                {/* Edition 2 — show link or "Not Yet Published" */}
                {active.drashta2Link && active.drashta2Link !== "#" ? (
                  <a
                    href={active.drashta2Link}
                    target="_blank" rel="noreferrer"
                    className="btn btn-outline"
                  >
                    📖 Drashta 2.0
                  </a>
                ) : (
                  <span style={{
                    display:"inline-flex", alignItems:"center",
                    padding:"11px 24px", borderRadius:"var(--radius-sm)",
                    border:"2px solid var(--border)", fontSize:".9rem",
                    color:"var(--muted)", fontWeight:500, fontStyle:"italic",
                  }}>
                    📖 Drashta 2.0 — Not Yet Published
                  </span>
                )}
              </div>
            ) : (
              /* All other initiatives — single Visit button if link exists */
              active.link && active.link !== "#" && (
                <a href={active.link} target="_blank" rel="noreferrer" className="btn btn-outline">
                  Visit →
                </a>
              )
            )}
          </>
        )}
      </Modal>

      <style>{`
        /* Right-to-left: starts at -50% (right side) scrolls to 0 (left side) */
        @keyframes logoScrollRTL {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}
