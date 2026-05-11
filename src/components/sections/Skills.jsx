// Skills — STATIC grid. Each row = category label + skill pills.
import { motion } from "framer-motion";
import { SKILLS } from "../../data/siteData";

const ACCENT      = "#22c55e";
const PILL_BG     = "#f0fdf4";
const PILL_BORDER = "#bbf7d0";
const CAT_COLOR   = "#15803d";
const CAT_BG      = "#dcfce7";

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--off-white)", paddingBottom: 0 }}>
      <div className="container">
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.5 }}
          style={{ marginBottom:32 }}
        >
          <h2 className="section-title">Proficient In</h2>
          <p className="section-sub">Technologies and tools I work with.</p>
        </motion.div>

        {/* Each category is a full row */}
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
                gap:12,
                background:"var(--card-bg)",
                border:"1px solid var(--border)",
                borderRadius:"var(--radius-md)",
                padding:"12px 16px",
                flexWrap:"wrap",
              }}
            >
              {/* Category label — fixed width badge on the left */}
              <span style={{
                padding:"5px 14px",
                borderRadius:999,
                fontSize:".7rem", fontWeight:800,
                letterSpacing:".06em", textTransform:"uppercase",
                background: CAT_BG, color: CAT_COLOR,
                border:`1.5px solid ${PILL_BORDER}`,
                whiteSpace:"nowrap",
                flexShrink:0,
              }}>
                {cat.category}
              </span>

              {/* Thin separator */}
              <div style={{ width:1, height:22, background:"var(--border)", flexShrink:0 }} />

              {/* Skill pills for this category */}
              <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                {cat.items.map((skill, si) => (
                  <span key={si} style={{
                    display:"inline-flex", alignItems:"center", gap:5,
                    padding:"5px 13px", borderRadius:999,
                    fontSize:".78rem", fontWeight:500,
                    background: PILL_BG, color: ACCENT,
                    border:`1px solid ${PILL_BORDER}`,
                  }}>
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
