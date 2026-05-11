// InitiativesServices.jsx
// Initiatives (bounded RTL marquee + popup modal) + Services I Offer in ONE section.

import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../ui/Modal";
import { INITIATIVES, SERVICES_LIST } from "../../data/siteData";

export default function InitiativesServices() {
  const [active, setActive] = useState(null);
  const marqueeItems = [...INITIATIVES, ...INITIATIVES];

  return (
    <section id="services" style={{ background: "var(--off-white)" }}>
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
      </div>

      {/* ── Bounded marquee inside container ── */}
      <div className="container">
        <div style={{ position:"relative", overflow:"hidden", marginBottom:56 }}>
          <div style={{ position:"absolute", left:0, top:0, bottom:0, width:50,
            background:"linear-gradient(to right, var(--off-white), transparent)",
            zIndex:1, pointerEvents:"none" }} />
          <div style={{ position:"absolute", right:0, top:0, bottom:0, width:50,
            background:"linear-gradient(to left, var(--off-white), transparent)",
            zIndex:1, pointerEvents:"none" }} />

          <div style={{
            display:"inline-flex", gap:28,
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

        {/* ── Services I Offer ── */}
        <motion.div
          initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.5 }}
        >
          <h2 className="section-title" style={{ marginBottom:24 }}>Services I Offer</h2>
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",
            gap:12, paddingBottom:16,
          }}>
            {SERVICES_LIST.map((svc, i) => (
              <motion.div key={i}
                initial={{ opacity:0, x:-10 }} whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }} transition={{ duration:0.4, delay: i * 0.05 }}
                style={{
                  display:"flex", alignItems:"center", gap:12,
                  padding:"13px 18px",
                  background:"var(--card-bg)",
                  border:"1px solid var(--border)",
                  borderRadius:"var(--radius-md)",
                  fontSize:".88rem", fontWeight:500, color:"var(--dark)",
                }}
              >
                <span style={{ width:8, height:8, borderRadius:"50%", background:"var(--accent)", flexShrink:0 }} />
                {svc}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Initiative popup ── */}
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

            {active.name === "Drashta" ? (
              <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                <a href="https://online.fliphtml5.com/vwrdfv/fzqk/" target="_blank" rel="noreferrer" className="btn btn-outline">
                  📖 Drashta 1.0
                </a>
                {active.drashta2Link && active.drashta2Link !== "#" ? (
                  <a href={active.drashta2Link} target="_blank" rel="noreferrer" className="btn btn-outline">
                    📖 Drashta 2.0
                  </a>
                ) : (
                  <span style={{
                    display:"inline-flex", alignItems:"center",
                    padding:"11px 24px", borderRadius:"var(--radius-sm)",
                    border:"2px solid var(--border)", fontSize:".88rem",
                    color:"var(--muted)", fontWeight:500, fontStyle:"italic",
                  }}>
                    📖 Drashta 2.0 — Not Yet Published
                  </span>
                )}
              </div>
            ) : (
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
        @keyframes logoScrollRTL {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}
