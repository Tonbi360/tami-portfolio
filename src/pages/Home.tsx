import { Link } from 'react-router-dom'
import { designer } from '../data/portfolio'

const cards = [
  { to: '/flyers', title: 'Social Media Flyers', desc: 'Birthday, sports & promo flyers', emoji: '🎨' },
  { to: '/brands', title: 'Brand Designs', desc: 'Logos, marks & wordmarks', emoji: '✦' },
  { to: '/banners', title: 'Banners & Graphics', desc: 'Print-ready & banner layouts', emoji: '🖼️' },
]

export default function Home() {
  return (
    <section className="home">
      <div className="hero-wrap">
        <div className="hero-text">
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
          <img src={designer.heroImage} alt={`${designer.name} ID card`} className="hero-idcard" />
        </div>
      </div>

      <div className="home-cards">
        {cards.map((c) => (
          <Link to={c.to} className="nav-card" key={c.to}>
            <span className="nav-card-emoji" aria-hidden="true">
              {c.emoji}
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
          <a href={`mailto:${designer.handle.replace('@', '')}@gmail.com`}>
            {designer.handle.replace('@', '')}@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
