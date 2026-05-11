// src/components/sections/FeaturedBar.jsx
import { SITE } from "../../data/siteData";

export default function FeaturedBar() {
  const { label, text, link } = SITE.featured;
  // Duplicate text enough times for seamless loop
  const items = Array(6).fill(`${text}   ✦   `);

  return (
    <div style={{
      marginTop: 64,           // exactly nav height so bar appears right below nav
      background: "#0f172a",
      color: "#fff",
      height: 38,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      position: "relative",
      zIndex: 10,
    }}>
      {/* Fixed label pill */}
      <div style={{
        background: "#f97316",
        padding: "0 16px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        fontWeight: 700,
        fontSize: ".72rem",
        letterSpacing: ".08em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        flexShrink: 0,
        zIndex: 1,
      }}>
        {label}
      </div>

      {/* Scrolling ticker */}
      <div style={{ overflow: "hidden", flex: 1 }}>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", display: "block" }}
        >
          <div style={{
            display: "inline-flex",
            whiteSpace: "nowrap",
            animation: "ticker 28s linear infinite",
          }}>
            {items.map((t, i) => (
              <span key={i} style={{ fontSize: ".82rem", color: "#fff", padding: "0 40px", opacity: .9 }}>
                {t}
              </span>
            ))}
          </div>
        </a>
      </div>
    </div>
  );
}
