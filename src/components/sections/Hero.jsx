import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "../../data/siteData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
});

function BgSymbols() {
  const syms = [
    { char: "</>",  top:"12%", left:"58%", size:"7rem"   },
    { char: "⚙",   top:"18%", left:"82%", size:"5rem"   },
    { char: "⚙",   top:"68%", left:"64%", size:"3.5rem" },
    { char: "{  }", top:"72%", left:"15%", size:"4rem"   },
    { char: "◈",   top:"8%",  left:"7%",  size:"2.8rem" },
    { char: "≋",   top:"40%", left:"60%", size:"3.5rem" },
    { char: "⌬",   top:"56%", left:"42%", size:"2.8rem" },
    { char: "01",  top:"88%", left:"52%", size:"2.5rem" },
    { char: "∿",   top:"30%", left:"74%", size:"4rem"   },
    { char: "⊕",   top:"78%", left:"30%", size:"2.8rem" },
    { char: "⚡",  top:"50%", left:"80%", size:"3rem"   },
    { char: "🔗",  top:"22%", left:"70%", size:"2.5rem" },
  ];
  return (
    <>
      {syms.map((s, i) => (
        <div key={i} style={{
          position:"absolute", top:s.top, left:s.left,
          fontSize:s.size, fontFamily:"var(--font-mono)",
          opacity:0.04, pointerEvents:"none", userSelect:"none",
          color:"var(--accent)", transform:"translate(-50%,-50%)",
          whiteSpace:"nowrap", lineHeight:1,
        }}>{s.char}</div>
      ))}
    </>
  );
}

export default function Hero() {
  const roles = SITE.taglineRoles;
  const [ri, setRi] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRi(p => (p + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, [roles.length]);

  return (
    <section id="home" style={{
      background:"var(--white)", minHeight:"92vh",
      display:"flex", alignItems:"center",
      paddingTop:102, position:"relative", overflow:"hidden",
    }}>
      <BgSymbols />

      <div style={{
        width:"100%", padding:"0 5vw",
        display:"flex", gap:"5vw", alignItems:"center",
      }}>
        {/* ── Image LEFT ── */}
        <motion.div
          initial={{ opacity:0, scale:0.85 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:0.7, delay:0.2 }}
          style={{ flex:"1 1 260px", display:"flex", justifyContent:"center" }}
        >
          <div className="float-anim" style={{
            width:"clamp(220px, 28vw, 360px)",
            height:"clamp(220px, 28vw, 360px)",
            borderRadius:"30% 70% 70% 30% / 30% 30% 70% 70%",
            border:"4px solid transparent",
            background:`linear-gradient(var(--white), var(--white)) padding-box,
                        linear-gradient(135deg, var(--accent), #22c55e) border-box`,
            overflow:"hidden",
            display:"flex", alignItems:"center", justifyContent:"center",
            backgroundColor:"var(--off-white)",
          }}>
            {SITE.profileImage ? (
              <img src={SITE.profileImage} alt={SITE.name}
                style={{ width:"100%", height:"100%", objectFit:"cover" }}
                onError={e => { e.target.style.display="none"; }} />
            ) : (
              <div style={{ textAlign:"center", padding:16 }}>
                <div style={{ fontSize:"4rem" }}>🧑‍💻</div>
                <div style={{ fontSize:".72rem", color:"var(--muted)", marginTop:8 }}>Place image.jpeg in /public/</div>
              </div>
            )}
          </div>
        </motion.div>

        {/* ── Text RIGHT ── */}
        <div style={{ flex:"2 1 340px" }}>

          {/* Green "open to opportunities" badge */}
          <motion.div {...fadeUp(0.1)}>
            <span className="pill" style={{ background:"#dcfce7", color:"#16a34a" }}>
              <span style={{
                width:7, height:7, borderRadius:"50%",
                background:"#22c55e", display:"inline-block",
                animation:"pulse-dot 2s infinite",
              }} />
              Open to Opportunities
            </span>
          </motion.div>

          {/* "Hi, I'm" small line */}
          <motion.div {...fadeUp(0.18)} style={{
            fontFamily:"var(--font-display)", fontWeight:700,
            fontSize:"clamp(1rem, 2vw, 1.3rem)",
            color:"var(--muted)", marginBottom:2,
          }}>
            Hi, I'm
          </motion.div>

          {/* Name — larger, switches in dark mode */}
          <motion.h1 {...fadeUp(0.22)} style={{
            fontFamily:"var(--font-display)", fontWeight:800,
            fontSize:"clamp(1.8rem, 4vw, 3.2rem)",
            lineHeight:1.1, marginBottom:14,
            color:"var(--text)",
          }}>
            {SITE.name}
          </motion.h1>

          {/* Animated role — orange */}
          <motion.div {...fadeUp(0.3)} style={{ height:32, overflow:"hidden", marginBottom:18 }}>
            <AnimatePresence mode="wait">
              <motion.div key={ri}
                initial={{ y:18, opacity:0 }} animate={{ y:0, opacity:1 }} exit={{ y:-18, opacity:0 }}
                transition={{ duration:0.38 }}
                style={{ color:"#f97316", fontWeight:600, fontSize:".95rem", fontFamily:"var(--font-mono)" }}
              >
                ▸ {roles[ri]}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Qualification — outline only, no background fill */}
          <motion.div {...fadeUp(0.4)} style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:22 }}>
            {SITE.qualifications.map((q, i) => (
              <span key={i} style={{
                display:"inline-block", padding:"7px 14px",
                borderRadius:"var(--radius-sm)", fontSize:".82rem", fontWeight:600,
                background:"transparent",          // NO fill
                color:"var(--accent)",
                border:"1.5px solid var(--accent)", // outline only
                letterSpacing:".01em",
              }}>
                🎓 {q}
              </span>
            ))}
          </motion.div>

          <motion.p {...fadeUp(0.5)} style={{ color:"var(--muted)", lineHeight:1.78, fontSize:".95rem", marginBottom:32, maxWidth:600 }}>
            {SITE.about}
          </motion.p>

          <motion.div {...fadeUp(0.6)} style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
            <a href="#projects" className="btn btn-primary">Explore Work →</a>
            <a href="#contact"  className="btn btn-outline">Get in Touch</a>
          </motion.div>
        </div>
      </div>

      {/* Mobile: image stacks ABOVE text */}
      <style>{`
        @media (max-width: 700px) {
          #home > div { flex-direction: column !important; flex-wrap: nowrap !important; }
        }
      `}</style>
    </section>
  );
}
