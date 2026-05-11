// src/components/ui/SectionHeader.jsx
// showPill=false hides the coloured pill badge
import { motion } from "framer-motion";

export default function SectionHeader({ title, sub, showPill = false, pill, pillBg, pillColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      style={{ marginBottom: 36 }}
    >
      {showPill && pill && (
        <span className="pill" style={{ background: pillBg, color: pillColor }}>{pill}</span>
      )}
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </motion.div>
  );
}
