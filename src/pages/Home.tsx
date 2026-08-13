import { Link } from 'react-router-dom'
import { designer } from '../data/portfolio'
import { useApp } from '../context/AppContext'

const EMAIL = 'tamunoipirinyeogolo@gmail.com'

const cards = [
  { to: '/flyers', title: 'Social Media Flyers', desc: 'Birthday, sports & promo flyers' },
  { to: '/brands', title: 'Brand Designs', desc: 'Logos, marks & wordmarks' },
  { to: '/banners', title: 'Banners & Graphics', desc: 'Print-ready & banner layouts' },
]

const icons = [
  // Social Media Flyers — layers icon
  <svg key="i1" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>,
  // Brand Designs — sparkle icon
  <svg key="i2" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21L8.188 15.904L3 15L8.188 14.096L9 9L9.813 14.096L15 15L9.813 15.904Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.007 5.952L18.5 9L17.993 5.952L15 5.5L17.993 5.048L18.5 2L19.007 5.048L22 5.5L19.007 5.952Z" />
  </svg>,
  // Banners & Graphics — layout icon
  <svg key="i3" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>,
]

export default function Home() {
  const { openContact, available } = useApp()

  return (
    <section className="home">
      <div className="hero-wrap">
        <div className="hero-text">
          <div className="status-badge" data-status={available ? 'available' : 'booked'}>
            <span className="status-dot" data-status={available ? 'available' : 'booked'} />
            <span>{available ? 'Available for Work' : 'Currently Booked'}</span>
          </div>
          <p className="eyebrow">Portfolio 2026</p>
          <h1 className="hero-name">{designer.name}</h1>
          <p className="hero-handle">{designer.handle}</p>
          <p className="hero-tagline">{designer.tagline}</p>
          <div className="hero-actions">
            <Link to="/flyers" className="btn btn-primary">
              View my work
            </Link>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-glow" aria-hidden="true" />
          <img src={designer.heroImage} alt={`${designer.name} ID card`} className="hero-idcard" />
        </div>
      </div>

      <div className="home-cards">
        {cards.map((c, i) => (
          <Link to={c.to} className="nav-card group" key={c.to}>
            <span className="nav-card-icon" aria-hidden="true">
              {icons[i]}
            </span>
            <h2>{c.title}</h2>
            <p>{c.desc}</p>
            <span className="nav-card-arrow">→</span>
          </Link>
        ))}
      </div>

      <div className="contact-strip" id="contact">
        <h2>Have a project in mind?</h2>
        <p>
          Let&apos;s create something great together. Reach out at{' '}
          <a href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <button type="button" onClick={() => openContact()} className="cta-btn">
          Work With Me →
        </button>
      </div>
    </section>
  )
}

