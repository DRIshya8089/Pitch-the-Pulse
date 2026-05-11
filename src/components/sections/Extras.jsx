// src/components/sections/Extras.jsx  — compact cards, all fit in one row on desktop
import { motion } from "framer-motion";
import { EXTRAS } from "../../data/siteData";

const categoryColors = {
  Social:            { bg: "#dcfce7", color: "#16a34a" },
  Leadership:        { bg: "#dbeafe", color: "#1d4ed8" },
  Hobby:             { bg: "#ffedd5", color: "#c2410c" },
  "Performing Arts": { bg: "#f3e8ff", color: "#7c3aed" },
};

export default function Extras() {
  return (
    <section id="extras" style={{ background: "var(--off-white)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: 32 }}>
          <h2 className="section-title">Extra-Curriculars & Interests</h2>
          <p className="section-sub">Life outside the lab and studio.</p>
        </motion.div>

        {/* Single-row scrollable strip — compact cards */}
        <div style={{
          display: "flex",
          gap: 14,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          paddingBottom: 6,
        }}>
          {EXTRAS.map((x, i) => {
            const tc = categoryColors[x.category] || categoryColors.Leadership;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card"
                style={{
                  flex: "0 0 190px",
                  scrollSnapAlign: "start",
                  padding: "18px 16px",
                  minWidth: 0,
                }}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>{x.emoji}</div>
                <span style={{
                  display: "inline-block", padding: "2px 8px", borderRadius: 999,
                  fontSize: ".62rem", fontWeight: 700, letterSpacing: ".05em",
                  textTransform: "uppercase", background: tc.bg, color: tc.color,
                  marginBottom: 8,
                }}>
                  {x.category}
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: ".88rem", marginBottom: 6, lineHeight: 1.3 }}>
                  {x.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: ".76rem", lineHeight: 1.55 }}>
                  {x.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{`.extras-track::-webkit-scrollbar{display:none}`}</style>
    </section>
  );
}
