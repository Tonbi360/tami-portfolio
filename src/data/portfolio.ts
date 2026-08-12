// ============================================================
// Tami Portfolio — Central Content & Image Data
// ------------------------------------------------------------
// Edit this file to change images, titles, or descriptions.
// Each image path is relative to /public (e.g. "/images/...")
// ============================================================

export const designer = {
  name: 'Ogolo Tamuno',
  handle: '@tami_noi',
  title: 'Graphic Designer',
  tagline:
    'Hi! I am a designer. This is what I can do and how I can help you in 2026.',
  heroImage: '/images/hero-id-card.png',
  bgGrid: '/images/bg-isometric-grid.jpg',
}

export type Project = {
  image: string
  title: string
  category: string
  description?: string
}

// ---------- PAGE 2: SOCIAL MEDIA FLYERS ----------
export const flyers: Project[] = [
  {
    image: '/images/flyer-oma-chioma.png',
    title: 'Oma Chioma',
    category: 'Birthday Flyer',
  },
  {
    image: '/images/flyer-sports-tryout.jpg',
    title: 'Sports Tryout',
    category: 'Event Flyer',
  },
  {
    image: '/images/flyer-adesuwa-glyde.jpg',
    title: 'Adesuwa',
    category: 'Birthday Flyer',
  },
  {
    image: '/images/flyer-olite-stationery.jpg',
    title: 'Back to School',
    category: 'Stationery Flyer',
  },
  {
    image: '/images/flyer-year-end-sales.jpg',
    title: 'Year-End Sales',
    category: 'Promo Flyer',
  },
  {
    image: '/images/flyer-aces-derby.jpg',
    title: 'Aces Derby',
    category: 'Sports Graphic',
  },
  {
    image: '/images/flyer-aces-tryout.jpg',
    title: 'Aces Tryout',
    category: 'Sports Flyer',
  },
  {
    image: '/images/flyer-world-tammy-day.jpg',
    title: "World Tami's Day",
    category: 'Celebration Flyer',
  },
  {
    image: '/images/flyer-queen-of-beauty.jpg',
    title: 'Queen of Beauty',
    category: 'Pageant Flyer',
  },
  {
    image: '/images/flyer-new-year-2026.jpg',
    title: 'Happy New Year 2026',
    category: 'Festive Flyer',
  },
]

// ---------- PAGE 3: BRAND DESIGNS ----------
export const brands: Project[] = [
  {
    image: '/images/logo-uc-church.jpg',
    title: 'UC Church',
    category: 'Logo & Emblem',
  },
  {
    image: '/images/logo-alpha-omega.jpg',
    title: 'Alpha Omega',
    category: 'Logo Design',
  },
  {
    image: '/images/logo-square.jpg',
    title: 'The Square',
    category: 'Brand Mark',
  },
  {
    image: '/images/logo-designer-pain.jpg',
    title: 'Designer Back Pain',
    category: 'Icon Design',
  },
  {
    image: '/images/logo-tower.jpg',
    title: 'The Tower',
    category: 'Logo Design',
  },
  {
    image: '/images/logo-arrow-four.jpg',
    title: 'Arrow Four',
    category: 'Logo Design',
  },
  {
    image: '/images/logo-more.jpg',
    title: 'MORE',
    category: 'Wordmark',
  },
]

// ---------- PAGE 4: BANNERS & GRAPHICS ----------
export const banners: Project[] = [
  {
    image: '/images/graphic-october-basketball.jpg',
    title: 'October / Basketball',
    category: 'Banner Graphic',
  },
]
