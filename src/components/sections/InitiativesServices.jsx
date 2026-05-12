// InitiativesServices.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../ui/Modal";
import { INITIATIVES, SERVICES_LIST } from "../../data/siteData";

// ── Extra popup data ──────────────────────────────────────────────────────────
const INITIATIVE_EXTRAS = {
  "DSign": {
    services: [
      "Logo & Brand Identity Design",
      "Poster & Flyer Design",
      "Presentation (PPT) Design",
      "Photo Frames & Polaroid Layouts",
      "Social Media Graphic Design",
      "Web UI Layout Design",
    ],
    workImages: [],
  },
  "Candle Lights": {
    services: [
      "Handcrafted Wax Art Pieces",
      "Ambient LED Lighting Decor",
      "Tissue Floral Designs",
      "Custom Aesthetic Candle Holders",
      "Gift & Home Decor Sets",
    ],
    workImages: [],
  },
  "Siva Arts": {
    workImages: [],
  },
};

// ── Sub-panel shown inside popup ──────────────────────────────────────────────
function SubPanel({ type, data, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        marginTop: 20, padding: "18px 20px",
        borderRadius: "var(--radius-md)",
        background: "var(--off-white)",
        border: "1px solid var(--border)",
        position: "relative",
      }}
    >
      <button onClick={onClose} style={{
        position: "absolute", top: 10, right: 12,
        background: "none", border: "none",
        cursor: "pointer", fontSize: "1rem", color: "var(--muted)",
      }}>✕</button>

      {type === "services" && (
        <>
          <p style={{ fontWeight: 700, fontSize: ".85rem", marginBottom: 12, color: "var(--dark)" }}>Services Offered</p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {data.map((s, i) => (
              <li key={i} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: ".85rem", color: "var(--muted)" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                {s}
              </li>
            ))}
          </ul>
        </>
      )}

      {type === "works" && (
        <>
          <p style={{ fontWeight: 700, fontSize: ".85rem", marginBottom: 12, color: "var(--dark)" }}>Our Works</p>
          {data.length === 0 ? (
            <p style={{ color: "var(--muted)", fontSize: ".83rem", fontStyle: "italic" }}>
              Images coming soon — check back later!
            </p>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 10 }}>
              {data.map((img, i) => (
                <img key={i} src={img.src} alt={img.alt} style={{
                  width: "100%", aspectRatio: "1", objectFit: "cover",
                  borderRadius: 10, border: "1px solid var(--border)",
                }} />
              ))}
            </div>
          )}
        </>
      )}
    </motion.div>
  );
}

// ── Single logo card ──────────────────────────────────────────────────────────
function LogoCard({ init, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -4 }}
      onClick={() => onClick(init)}
      style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: 8,
        cursor: "pointer",
        width: 110, flexShrink: 0,
      }}
    >
      <div style={{
        width: 90, height: 90, borderRadius: 20,
        background: "var(--card-bg)",
        border: "1.5px solid var(--border)",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden", boxShadow: "var(--shadow-sm)",
      }}>
        {init.logoFile ? (
          <img
            src={`/${init.logoFile}`} alt={init.name}
            style={{ width: "80%", height: "80%", objectFit: "contain" }}
          />
        ) : null}
        <span style={{
          fontSize: "2.2rem",
          display: init.logoFile ? "none" : "flex",
          alignItems: "center", justifyContent: "center",
        }}>
          {init.logo}
        </span>
      </div>
      <span style={{
        fontSize: ".75rem", fontWeight: 700,
        color: "var(--dark)", textAlign: "center",
        maxWidth: 100, lineHeight: 1.3,
      }}>
        {init.name}
      </span>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function InitiativesServices() {
  const [active, setActive] = useState(null);
  const [subPanel, setSubPanel] = useState(null);

  // Layout Constants
  const VISIBLE_COUNT = 6;  // Now showing all 6 at once
  const CARD_W = 110;
  const GAP = 24;
  const STEP = CARD_W + GAP;
  const totalItems = INITIATIVES.length; // 6
  
  // The viewport is now sized exactly for 6 items
  const viewportW = VISIBLE_COUNT * CARD_W + (VISIBLE_COUNT - 1) * GAP;
  const totalSetWidth = totalItems * STEP;

  const handleOpen = (init) => { setActive(init); setSubPanel(null); };
  const extras = active ? (INITIATIVE_EXTRAS[active.name] || {}) : {};

  return (
    <section id="services" style={{ background: "var(--off-white)", overflow: "hidden" }}>
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 32 }}
        >
          <h2 className="section-title">Initiatives</h2>
          <p className="section-sub">Organisations and projects I've been part of — click to learn more.</p>
        </motion.div>

        {/* ── Continuous Left-to-Right Loop (6 items visible) ── */}
        <div style={{
          width: viewportW, // Minimized rail to fit exactly 6 items
          margin: "0 auto",
          marginBottom: 56,
          overflow: "hidden",
          position: "relative",
          // Adding a subtle fade at the edges for a professional look
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}>
          <motion.div
            style={{
              display: "flex",
              gap: GAP,
              width: "max-content",
            }}
            animate={{
              // Left-to-Right movement: starts at -SetWidth and moves to 0
              x: [-totalSetWidth, 0],
            }}
            transition={{
              duration: 35, // Slow continuous speed
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* We render multiple sets to ensure there is never a blank space in the loop */}
            {[...INITIATIVES, ...INITIATIVES, ...INITIATIVES].map((init, i) => (
              <LogoCard key={i} init={init} onClick={handleOpen} />
            ))}
          </motion.div>
        </div>

        {/* Services I Offer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <h2 className="section-title" style={{ marginBottom: 24 }}>Services I Offer</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 12, paddingBottom: 16,
          }}>
            {SERVICES_LIST.map((svc, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "13px 18px",
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  fontSize: ".88rem", fontWeight: 500, color: "var(--dark)",
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                {svc}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Initiative detail popup ── */}
      <Modal isOpen={!!active} onClose={() => { setActive(null); setSubPanel(null); }}>
        {active && (
          <>
            <div style={{
              width: 72, height: 72, borderRadius: 16, overflow: "hidden",
              border: "1.5px solid var(--border)", marginBottom: 14,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "var(--off-white)",
            }}>
              {active.logoFile ? (
                <img src={`/${active.logoFile}`} alt={active.name}
                  style={{ width: "80%", height: "80%", objectFit: "contain" }}
                  onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} />
              ) : null}
              <span style={{ fontSize: "1.8rem", display: active.logoFile ? "none" : "flex" }}>
                {active.logo}
              </span>
            </div>

            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem", marginBottom: 10, color: "var(--dark)" }}>
              {active.name}
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 18 }}>{active.desc}</p>

            {active.name === "Drashta" && (
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="https://online.fliphtml5.com/vwrdfv/fzqk/" target="_blank" rel="noreferrer" className="btn btn-outline">
                  📖 Drashta 1.0
                </a>
                {active.drashta2Link && active.drashta2Link !== "#" ? (
                  <a href={active.drashta2Link} target="_blank" rel="noreferrer" className="btn btn-outline">
                    📖 Drashta 2.0
                  </a>
                ) : (
                  <span style={{
                    display: "inline-flex", alignItems: "center",
                    padding: "11px 24px", borderRadius: "var(--radius-sm)",
                    border: "2px solid var(--border)", fontSize: ".88rem",
                    color: "var(--muted)", fontWeight: 500, fontStyle: "italic",
                  }}>
                    📖 Drashta 2.0 — Not Yet Published
                  </span>
                )}
              </div>
            )}

            {(active.name === "DSign" || active.name === "Candle Lights") && (
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  onClick={() => setSubPanel(subPanel === "services" ? null : "services")}
                  className="btn btn-outline"
                >
                  {subPanel === "services" ? "▲ Hide Services" : "📋 Our Services"}
                </button>
                <button
                  onClick={() => setSubPanel(subPanel === "works" ? null : "works")}
                  className="btn btn-outline"
                >
                  {subPanel === "works" ? "▲ Hide Works" : "🖼️ Our Works"}
                </button>
              </div>
            )}

            {active.name === "Siva Arts" && (
              <div style={{ display: "flex", gap: 12 }}>
                <button
                  onClick={() => setSubPanel(subPanel === "works" ? null : "works")}
                  className="btn btn-outline"
                >
                  {subPanel === "works" ? "▲ Hide Products" : "🖼️ Our Products"}
                </button>
              </div>
            )}

            {subPanel === "services" && extras.services && (
              <SubPanel type="services" data={extras.services} onClose={() => setSubPanel(null)} />
            )}
            {subPanel === "works" && extras.workImages && (
              <SubPanel type="works" data={extras.workImages} onClose={() => setSubPanel(null)} />
            )}
          </>
        )}
      </Modal>
    </section>
  );
}