// Experience.jsx — standalone Work Journey section with timeline

import { motion } from "framer-motion";
import { EXPERIENCE } from "../../data/siteData";

const typeStyle = {
  Internship: { bg:"#dbeafe", color:"#1d4ed8" },
  Research:   { bg:"#dcfce7", color:"#15803d" },
  Leadership: { bg:"#ffedd5", color:"#c2410c" },
};

export default function Experience() {
  return (
    <section id="workjourney" style={{ background:"var(--white)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.5 }}
          style={{ marginBottom:36 }}
        >
          <h2 className="section-title">Work Journey</h2>
          <p className="section-sub">Roles that shaped my perspective.</p>
        </motion.div>

        <div style={{ position:"relative", paddingLeft:40 }}>
          {/* Vertical gradient line — GREEN top → BLUE bottom */}
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
                {/* Timeline dot */}
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
    </section>
  );
}
