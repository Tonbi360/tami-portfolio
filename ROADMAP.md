# 🎨 Tami Portfolio — Project Roadmap

> **Purpose:** This document serves as the single source of truth for building the portfolio.
> If you lose chat history, read this file in a new chat to know exactly what to do next.

## 📌 Project Overview

A **responsive portfolio website** for **Tami**, a **Graphic Designer**.
The site must work well on **both mobile and desktop** (PC).

## 🧱 Tech Stack (Foundation)

| Tool | Version | Purpose |
|------|---------|---------|
| Vite | 8.x | Build tool / dev server |
| React | 19.x | UI framework |
| ReactDOM | 19.x | DOM rendering |
| TypeScript | 6.x | Type safety |
| @vitejs/plugin-react | 6.x | Vite React plugin |

### ✅ Foundation Status

- [x] Node project initialized (`package.json`)
- [x] Vite + TypeScript installed
- [x] React + ReactDOM installed
- [x] React plugin (`@vitejs/plugin-react`) installed
- [x] `vite.config.ts` created with React plugin
- [x] `tsconfig.json` updated with `jsx: "react-jsx"`
- [x] `src/main.tsx` created as React entry point
- [x] `src/App.tsx` created as root component
- [x] `index.html` updated (title + `#root` + main.tsx)
- [x] `src/vite-env.d.ts` added for CSS module types
- [x] Git initialized (`git init`) — **initial commit NOT yet made**
- [x] Old starter files removed (`main.ts`, `counter.ts`)

## 📄 Project Structure

```
tami-portfolio/
├── index.html          # Entry HTML
├── package.json        # Dependencies & scripts
├── tsconfig.json       # TypeScript config
├── vite.config.ts      # Vite config (React plugin)
├── ROADMAP.md          # This file
├── public/             # Static assets (favicon, icons)
└── src/
    ├── main.tsx        # React entry point
    ├── App.tsx         # Root component
    ├── style.css       # Global styles
    ├── vite-env.d.ts   # Type declarations
    └── assets/         # Images (hero.png, etc.)
```

## 🎯 Next Steps (Build the Portfolio)

> **Note to future assistant:** The design and content below are placeholders until
> the client (Tami) provides their actual images, text, and design preferences.

### 1. Collect Client Info (WAITING ON CLIENT)
- [ ] Get Tami's profile photo / hero image
- [ ] Get portfolio project images (design work)
- [ ] Get bio/about text
- [ ] Get contact info (email, social links)
- [ ] Get brand color preferences / design style
- [ ] Get resume / experience details

### 2. Design & Structure
- [ ] Design layout (nav, hero, about, projects/work, contact, footer)
- [ ] Choose color palette & typography
- [ ] Ensure mobile responsiveness (media queries, flex/grid)
- [ ] Set up smooth navigation/scroll

### 3. Build Sections
- [ ] **Navbar** — logo + nav links (responsive hamburger menu)
- [ ] **Hero** — name, tagline, CTA, hero image
- [ ] **About** — bio, skills, tools
- [ ] **Work/Portfolio** — grid of project cards with images
- [ ] **Contact** — form or contact links
- [ ] **Footer** — social links, copyright

### 4. Polish
- [ ] Animations / transitions
- [ ] SEO meta tags
- [ ] Accessibility
- [ ] Final responsive testing (mobile + desktop)

### 5. Deploy
- [ ] Build production (`npm run build`)
- [ ] Deploy to hosting (GitHub Pages / Vercel / Netlify)

## 🚀 Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Key Files to Edit for Content

- **`src/App.tsx`** — main page structure & sections
- **`src/style.css`** — all styling (colors, layout, responsive)
- **`public/`** — static images & icons
- **`src/assets/`** — imported images (hero, project images)

## 💡 Developer Notes

- The site MUST be responsive (test at 375px mobile and 1280px+ desktop)
- Tami is a graphic designer — visual quality matters a lot
- Keep the design clean and showcase the work prominently
- Use the client-provided images and style once available
