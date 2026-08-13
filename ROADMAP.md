
- **`src/components/Navbar.tsx`** — nav links
- **`src/pages/`** — individual page layouts
- **`public/images/`** — actual image files

## 💡 Developer Notes

- The site MUST be responsive (test at 375px mobile and 1280px+ desktop)
- Tami is a graphic designer — visual quality matters a lot
- Keep the design clean and showcase the work prominently
- Brand palette: deep navy ink (`#0f172a`), teal accent (`#0d9488`), blue accent (`#2563eb`), warm off-white bg
- **⚠ IMPORTANT:** Never run concurrent `npm install` commands — Vite 8 uses rolldown native bindings and concurrent installs corrupt them. If it happens, delete `node_modules` + `package-lock.json` and reinstall cleanly.
