# 🎨 Tami Portfolio — Project Roadmap

> **Purpose:** Single source of truth for building the portfolio.
> If you lose chat history, read this file in a new chat to know exactly what to do next.

## 📌 Project Overview

A **responsive portfolio website** for **Tami** (real name **Ogolo Tamuno**, handle **@tami_noi**), a **Graphic Designer**.
The site is a **4-page** multi-page app and must work well on **both mobile (375px) and desktop (1280px+)**.

### The 4 Pages
1. **Home** — hero with Tami's "ID card" intro graphic, name, tagline, and nav cards.
2. **Social Media Flyers** — gallery of event/promo flyers on a blue isometric-grid background.
3. **Brand Designs** — gallery of logos, brand marks, and wordmarks.
4. **Banners & Graphics** — gallery of banner mockups and print graphics.

## 🧱 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Vite | 8.x | Build tool / dev server |
| React | 19.x | UI framework |
| ReactDOM | 19.x | DOM rendering |
| TypeScript | 6.x | Type safety |
| @vitejs/plugin-react | 6.x | Vite React plugin |
| react-router-dom | 6.x/7.x | Multi-page routing |

### ✅ Foundation Status
- [x] Node project initialized (`package.json`)
- [x] Vite + TypeScript installed
- [x] React + ReactDOM installed
- [x] `@vitejs/plugin-react` installed
- [x] `react-router-dom` installed
- [x] `vite.config.ts` created with React plugin
- [x] `tsconfig.json` updated with `jsx: "react-jsx"`
- [x] `src/main.tsx` React entry point
- [x] `index.html` updated (title + `#root` + main.tsx)
- [x] Git initialized + initial commit made (`9e86201`)
- [x] Old starter files removed (`main.ts`, `counter.ts`, unused svgs)

## 📁 Project Structure

```
tami-portfolio/
├── index.html              # Entry HTML (title, meta)
├── package.json
├── tsconfig.json
├── vite.config.ts          # React plugin
├── ROADMAP.md              # THIS FILE
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── images/             # All portfolio images (renamed, descriptive)
└── src/
    ├── main.tsx            # React entry
    ├── App.tsx             # Router setup (routes)
    ├── style.css           # ALL global + responsive styles
    ├── vite-env.d.ts
    ├── data/
    │   └── portfolio.ts    # ★ CENTRAL CONTENT — edit images/titles here
    ├── components/
    │   ├── Navbar.tsx      # Responsive navbar (hamburger on mobile)
    │   ├── Footer.tsx
    │   ├── Layout.tsx      # Navbar + Outlet + Footer
    │   └── Gallery.tsx     # Reusable image grid
    └── pages/
        ├── Home.tsx
        ├── Flyers.tsx      # Social Media Flyers
        ├── Brands.tsx      # Brand Designs
        └── Banners.tsx     # Banners & Graphics
```

## ✅ Build Status (Current)

- [x] Images copied to `public/images/` and renamed descriptively
- [x] `react-router-dom` installed
- [x] Routing set up in `App.tsx` (4 routes + Layout)
- [x] Navbar (responsive hamburger) + Footer + Layout created
- [x] Home page (hero, nav cards, contact strip)
- [x] Flyers / Brands / Banners gallery pages
- [x] Global responsive styling (`style.css`)
- [x] `index.html` title + meta description
- [x] **Production build verified** (`npm run build` → `dist/`)

## 🎯 Remaining / Next Steps

### 1. Verify & Polish
- [ ] Run `npm run dev` and visually verify each page at mobile + desktop widths
- [ ] **Verify image-to-project mapping** — some images were assigned to names by best-effort (timestamps). If a card shows the wrong design, swap the path in `src/data/portfolio.ts`.
- [ ] Add lightbox/zoom on image click (optional)
- [ ] Add scroll-reveal animations (optional)
- [ ] Add loading states / skeleton for images

### 2. Content / Customization (needs client input)
- [ ] Confirm real contact email & social links (currently placeholder `taminoi@gmail.com`)
- [ ] Add real bio / about text
- [ ] Confirm brand color preferences (currently navy + teal/blue)
- [ ] Add more Banners/Graphics items if the client has more

### 3. Deploy
- [ ] Commit all changes
- [ ] Configure static hosting (GitHub Pages / Vercel / Netlify)
- [ ] Push to remote repo

## 🚀 Development Commands

```bash
npm run dev        # Start dev server
npm run build      # Build for production (tsc + vite build)
npm run preview    # Preview production build
```

## 📦 Key Files to Edit for Content

- **`src/data/portfolio.ts`** — ★ edit ALL images, titles, categories, designer info here
- **`src/style.css`** — all styling (colors in `:root`, responsive breakpoints)
- **`src/components/Navbar.tsx`** — nav links
- **`src/pages/`** — individual page layouts
- **`public/images/`** — actual image files

## 💡 Developer Notes

- The site MUST be responsive (test at 375px mobile and 1280px+ desktop)
- Tami is a graphic designer — visual quality matters a lot
- Keep the design clean and showcase the work prominently
- Brand palette: deep navy ink (`#0f172a`), teal accent (`#0d9488`), blue accent (`#2563eb`), warm off-white bg
- **⚠ IMPORTANT:** Never run concurrent `npm install` commands — Vite 8 uses rolldown native bindings and concurrent installs corrupt them. If it happens, delete `node_modules` + `package-lock.json` and reinstall cleanly.
