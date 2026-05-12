// Skills — STATIC grid. Each row = category badge + plain green text skills.
// Category keeps its green highlight box. Skills are plain coloured text with a dot.
import { motion } from "framer-motion";
import { SKILLS } from "../../data/siteData";

const ACCENT    = "#22c55e";
const CAT_COLOR = "#15803d";
const CAT_BG    = "#dcfce7";
const CAT_BORDER= "#bbf7d0";

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--white)", paddingBottom: 0 }}>
      <div className="container">
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.5 }}
          style={{ marginBottom:32 }}
        >
          <h2 className="section-title">Proficient In</h2>
          <p className="section-sub">Technologies and tools I work with.</p>
        </motion.div>

        <div style={{ display:"flex", flexDirection:"column", gap:14, paddingBottom:48 }}>
          {SKILLS.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity:0, x:-14 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.4, delay: ci * 0.07 }}
              style={{
                display:"flex",
                alignItems:"center",
                gap:14,
                flexWrap:"wrap",
                padding:"10px 0",
              }}
            >
              {/* Category — keeps green highlight box */}
              <span style={{
                padding:"5px 14px",
                borderRadius:999,
                fontSize:".7rem", fontWeight:800,
                letterSpacing:".06em", textTransform:"uppercase",
                background: CAT_BG, color: CAT_COLOR,
                border:`1.5px solid ${CAT_BORDER}`,
                whiteSpace:"nowrap",
                flexShrink:0,
              }}>
                {cat.category}
              </span>

              {/* Thin separator */}
              <div style={{ width:1, height:18, background:"var(--border)", flexShrink:0 }} />

              {/* Skills — plain green text with bullet dot, no box */}
              <div style={{ display:"flex", gap:18, flexWrap:"wrap", alignItems:"center" }}>
                {cat.items.map((skill, si) => (
                  <span key={si} style={{
                    display:"inline-flex", alignItems:"center", gap:5,
                    fontSize:".82rem", fontWeight:500,
                    color: ACCENT,
                  }}>
                    <span style={{ width:5, height:5, borderRadius:"50%", background:ACCENT, flexShrink:0 }} />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
