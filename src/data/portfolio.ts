// ============================================================
// Tami Portfolio — Central Content & Image Data
// ------------------------------------------------------------
// Edit this file to change images, titles, or descriptions.
// Each image path is relative to /public (e.g. "/images/...")
// ============================================================

export const designer = {
  name: 'Ogolo Tamuno',
  handle: '@tamin.oi',
  title: 'Graphic Designer',
  tagline:
    'Hi! I am a designer. This is what I can do and how I can help you in 2026.',
  heroImage: '/images/hero-id-card.jpg',
  bgGrid: '/images/bg-isometric-grid.jpg',
}

export type Project = {
  id: string
  image: string
  title: string
  category: string
  description?: string
}

// ---------- PAGE 2: SOCIAL MEDIA FLYERS ----------
export const flyers: Project[] = [
  { id: '1', title: 'Oma Chioma', category: 'BIRTHDAY FLYER', image: '/images/flyer-oma-chioma.jpg' },
  { id: '2', title: 'Sports Tryout', category: 'EVENT FLYER', image: '/images/flyer-sports-tryout.jpg' },
  { id: '3', title: 'Back to School', category: 'STATIONERY FLYER', image: '/images/flyer-olite-stationery.jpg' },
  { id: '4', title: 'Adesuwa Esiekpe', category: 'BIRTHDAY FLYER', image: '/images/flyer-adesuwa-glyde.jpg' },
  { id: '5', title: 'Year-End Sales', category: 'PROMO FLYER', image: '/images/flyer-year-end-sales.jpg' },
  { id: '6', title: 'ACES Derby', category: 'SPORTS FLYER', image: '/images/flyer-aces-derby.jpg' },
  { id: '7', title: 'ACES Tryouts', category: 'SPORTS FLYER', image: '/images/flyer-aces-tryout.jpg' },
  { id: '8', title: 'World Tammy Day', category: 'CELEBRATION FLYER', image: '/images/flyer-world-tammy-day.jpg' },
  { id: '9', title: 'Queen of Beauty', category: 'PAGEANT FLYER', image: '/images/flyer-queen-of-beauty.jpg' },
  { id: '10', title: 'Happy New Year 2026', category: 'FESTIVE FLYER', image: '/images/flyer-new-year-2026.jpg' },
  { id: '11', title: 'October Basketball', category: 'SEASONAL GRAPHIC', image: '/images/graphic-october-basketball.jpg' },
]

// ---------- PAGE 3: BRAND DESIGNS ----------
export const brands: Project[] = [
  { id: '1', title: 'Unlimited Teens Church', category: 'CHURCH EMBLEM', image: '/images/logo-uc-church.jpg' },
  { id: '2', title: 'Alpha Omega', category: 'BRAND MARK', image: '/images/logo-alpha-omega.jpg' },
  { id: '3', title: 'Square', category: 'IDENTITY DESIGN', image: '/images/logo-square.jpg' },
  { id: '4', title: 'Designer Back Pain', category: 'CONCEPT LOGO', image: '/images/logo-designer-pain.jpg' },
  { id: '5', title: 'The Tower', category: 'ICON DESIGN', image: '/images/logo-tower.jpg' },
  { id: '6', title: 'Arrow Four', category: 'ABSTRACT LOGO', image: '/images/logo-arrow-four.jpg' },
  { id: '7', title: 'MORE Wordmark', category: 'TYPOGRAPHY LOGO', image: '/images/logo-more.jpg' },
]

// ---------- PAGE 4: BANNERS & GRAPHICS ----------
export const banners: Project[] = [
  { id: '1', title: 'October / Basketball Graphic', category: 'BANNER & PRINT MEDIA', image: '/images/graphic-october-basketball.jpg' },
  { id: '2', title: 'Year-End Sales Display Banner', category: 'PRINT PROMO BANNERS', image: '/images/flyer-year-end-sales.jpg' },
]
