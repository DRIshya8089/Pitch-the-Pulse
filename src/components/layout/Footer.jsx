// Footer — DSign logo image, larger size
import { SITE } from "../../data/siteData";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--dark)", color: "var(--muted)",
      padding: "28px 0", textAlign: "center", fontSize: ".82rem",
    }}>
      <div className="container">
        <div style={{
          marginBottom: 6,
          display: "flex", alignItems: "center",
          justifyContent: "center", gap: 8, flexWrap: "wrap",
        }}>
          <span>Designed &amp; Developed with</span>
          <span style={{ color: "#f97316" }}>♥</span>
          <span>by</span>
          {/* DSign logo — logo3.jpg from /public/. Increased to height:34 for clarity */}
          <img
            src="/logo3.jpg"
            alt="DSign"
            style={{
              height: 34,
              width: "auto",
              borderRadius: 6,
              objectFit: "contain",
              verticalAlign: "middle",
              display: "inline-block",
              boxShadow: "0 1px 4px rgba(0,0,0,.3)",
            }}
            onError={e => {
              e.target.style.display = "none";
              document.getElementById("dsign-fallback").style.display = "inline";
            }}
          />
          <span
            id="dsign-fallback"
            style={{ display: "none", color: "#fff", fontWeight: 700, fontFamily: "var(--font-mono)" }}
          >
            DSign
          </span>
        </div>
        <div>
          © {new Date().getFullYear()}{" "}
          <span style={{ color: "#cbd5e1" }}>{SITE.name}</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
