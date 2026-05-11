# Personal Portfolio — Vite + React

A fully responsive, animated personal portfolio built with **Vite**, **React**, and **Framer Motion**.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          ← Drop your resume here
├── src/
│   ├── assets/
│   │   └── images/         ← Drop profile photo + project covers here
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── FeaturedBar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Extras.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── Modal.jsx
│   │       └── SectionHeader.jsx
│   ├── data/
│   │   └── siteData.js     ← ✏️ ALL your content lives here
│   ├── hooks/
│   │   └── useInView.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## ✏️ Personalising Your Portfolio

**All content lives in one file:** `src/data/siteData.js`

Search for `// ✏️` comments — every editable field is marked.

| What to change | Where |
|---|---|
| Name, about, tagline | `SITE` object in `siteData.js` |
| Profile photo | Drop in `src/assets/images/`, import at top of `siteData.js`, set `SITE.profileImage` |
| Resume | Drop `resume.pdf` in `/public/` |
| Projects | `PROJECTS` array — add `cover` image path for each |
| Services | `SERVICES` array |
| Experience | `EXPERIENCE` array |
| Extra-curriculars | `EXTRAS` array |
| Social links | `CONTACT` array |
| Drashta / featured bar link | `SITE.featured.link` |
| Footer credit | `src/components/layout/Footer.jsx` |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| Vite | Build tool & dev server |
| React 18 | UI framework |
| Framer Motion | Animations |
| CSS Variables | Design tokens / theming |
| Google Fonts | Syne · DM Sans · Space Mono |

> No backend needed — this is a purely static site. Host it for free on Vercel, Netlify, or GitHub Pages.
