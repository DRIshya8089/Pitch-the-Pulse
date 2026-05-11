// Projects — carousel. Modal has GitHub Repo + LinkedIn More Details buttons.
// Both link fields (link + linkedinLink) are placeholders in siteData per project.

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Modal from "../ui/Modal";
import { PROJECTS } from "../../data/siteData";

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink:0 }}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink:0 }}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      whileHover={{ scale:1.035, boxShadow:"0 20px 48px rgba(0,0,0,.13)" }}
      onClick={onClick}
      style={{
        flexShrink:0, width:290, cursor:"pointer",
        borderRadius:20, overflow:"hidden",
        border:"1px solid var(--border)", background:"var(--card-bg)",
        scrollSnapAlign:"start",
      }}
    >
      <div style={{
        height:160, position:"relative", overflow:"hidden",
        background:"linear-gradient(135deg, var(--accent-light), #f0fdf4)",
        display:"flex", alignItems:"center", justifyContent:"center", fontSize:"3.5rem",
      }}>
        {project.cover
          ? <img src={project.cover} alt={project.title}
              style={{ width:"100%", height:"100%", objectFit:"cover", position:"absolute" }}
              onError={e => { e.target.style.display="none"; }} />
          : project.emoji}
        <motion.div initial={{ opacity:0 }} whileHover={{ opacity:1 }}
          style={{ position:"absolute", inset:0, background:"rgba(15,23,42,.45)",
            display:"flex", alignItems:"center", justifyContent:"center",
            color:"#fff", fontWeight:700, fontSize:".9rem" }}>
          View More →
        </motion.div>
      </div>
      <div style={{ padding:"16px 16px 20px" }}>
        <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:8 }}>
          {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <h3 style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:".97rem", marginBottom:6, color:"var(--dark)" }}>
          {project.title}
        </h3>
        <p style={{ color:"var(--muted)", fontSize:".8rem", lineHeight:1.6 }}>{project.shortDesc}</p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);
  const trackRef = useRef(null);
  const drag = useRef({ down:false, startX:0, scrollLeft:0 });

  const onMouseDown = e => {
    drag.current = { down:true, startX:e.pageX - trackRef.current.offsetLeft, scrollLeft:trackRef.current.scrollLeft };
    trackRef.current.style.cursor = "grabbing";
  };
  const onMouseMove = e => {
    if (!drag.current.down) return;
    e.preventDefault();
    trackRef.current.scrollLeft = drag.current.scrollLeft - (e.pageX - trackRef.current.offsetLeft - drag.current.startX);
  };
  const onMouseUp = () => { drag.current.down = false; if (trackRef.current) trackRef.current.style.cursor = "grab"; };

  return (
    <section id="projects" style={{ background:"var(--white)" }}>
      <div className="container">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }} style={{ marginBottom:36 }}>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-sub">Drag or swipe — click a card to dive deeper.</p>
        </motion.div>
      </div>

      <div className="container">
        <div ref={trackRef}
          onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
          style={{ display:"flex", gap:20, overflowX:"auto", scrollSnapType:"x mandatory",
            scrollbarWidth:"none", paddingBottom:8, cursor:"grab", userSelect:"none" }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.id+"-"+i} project={p} onClick={() => setActive(p)} />)}
        </div>
      </div>

      <Modal isOpen={!!active} onClose={() => setActive(null)}>
        {active && (
          <>
            <div style={{ fontSize:"2.8rem", marginBottom:12 }}>{active.emoji}</div>
            <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:12 }}>
              {active.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <h2 style={{ fontFamily:"var(--font-display)", fontWeight:800, fontSize:"1.4rem", marginBottom:14, color:"var(--dark)" }}>
              {active.title}
            </h2>
            <p style={{ color:"var(--muted)", lineHeight:1.8, marginBottom:28 }}>{active.fullDesc}</p>

            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              {/* GitHub Repo — always shown; set project.link in siteData */}
              <a
                href={active.link && active.link !== "#" ? active.link : "https://github.com/DRIshya8089"}
                target="_blank" rel="noreferrer"
                className="btn btn-outline"
                style={{ display:"inline-flex", alignItems:"center", gap:8 }}
              >
                <GitHubIcon /> GitHub Repo
              </a>

              {/* LinkedIn More Details — always shown; set project.linkedinLink in siteData */}
              <a
                href={active.linkedinLink && active.linkedinLink !== "#" ? active.linkedinLink : "https://www.linkedin.com/in/drishya-n"}
                target="_blank" rel="noreferrer"
                className="btn btn-outline"
                style={{ display:"inline-flex", alignItems:"center", gap:8 }}
              >
                <LinkedInIcon /> More Details
              </a>

              {/* Live Demo — only if liveLink is set and not placeholder */}
              {active.liveLink && active.liveLink !== "#" && (
                <a href={active.liveLink} target="_blank" rel="noreferrer" className="btn btn-outline">
                  Live Demo ↗
                </a>
              )}
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
