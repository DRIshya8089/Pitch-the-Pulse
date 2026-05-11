// Services.jsx — "Services I Offer" list only (no Initiatives here)
// Initiatives moved to combined Initiatives+Experience section
import { motion } from "framer-motion";
import { SERVICES_LIST } from "../../data/siteData";

export default function Services() {
  return (
    <section id="services" style={{ background: "var(--off-white)", paddingTop: 0 }}>
      <div className="container" style={{ paddingBottom: 70 }}>
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.5 }}
          style={{ marginBottom:28 }}
        >
          <h2 className="section-title">Services I Offer</h2>
        </motion.div>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",
          gap:12,
        }}>
          {SERVICES_LIST.map((svc, i) => (
            <motion.div key={i}
              initial={{ opacity:0, x:-10 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.4, delay: i * 0.05 }}
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
      </div>
    </section>
  );
}
