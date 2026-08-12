import { Link } from 'react-router-dom'
import { designer } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-dot" aria-hidden="true" />
          <span className="brand-name">{designer.handle}</span>
        </div>
        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/flyers">Flyers</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/banners">Banners</Link>
        </nav>
        <p className="footer-copy">
          © {new Date().getFullYear()} {designer.name} — {designer.title}. All
          rights reserved.
        </p>
      </div>
    </footer>
  )
}
