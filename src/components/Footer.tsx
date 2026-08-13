import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { designer } from '../data/portfolio'
import { useApp } from '../context/AppContext'

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/tami_noi',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'Behance',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
        <path d="M9.5 11.5c1.2-.4 1.9-1.2 1.9-2.5 0-2.1-1.6-3-3.8-3H2v12h5.7c2.4 0 4.3-1.1 4.3-3.5 0-1.4-.7-2.5-2.5-3zM5 8h2.4c.9 0 1.5.3 1.5 1.2 0 .9-.6 1.3-1.5 1.3H5V8zm2.6 8H5v-3h2.7c1.1 0 1.7.4 1.7 1.5 0 1.1-.7 1.5-1.8 1.5zM22 15.5c-.3-1.9-1.7-3-3.8-3-2.1 0-3.7 1.2-3.7 3.3 0 2.2 1.6 3.4 3.8 3.4 1.7 0 2.9-.8 3.4-2.3h-1.9c-.2.5-.8.8-1.5.8-1 0-1.6-.5-1.7-1.4h5.2c0-.2 0-.5.2-.8zM16 14.2c.1-1 .7-1.5 1.7-1.5.9 0 1.5.5 1.6 1.5H16zM14 5h5v1.3h-5V5z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/tami_noi',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/2348133233075',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.48 2 2 6.48 2 12c0 1.96.53 3.796 1.461 5.377L2 22l4.73-1.44A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.15c-1.64 0-3.24-.44-4.65-1.28l-.33-.2-2.81.86.86-2.74-.22-.34A8.1 8.1 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8.15-8 8.15z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const { openAdmin } = useApp()
  const taps = useRef<number[]>([])

  const handleSecretTap = () => {
    const now = Date.now()
    taps.current = [...taps.current, now].filter((t) => now - t < 3000)
    // 5 rapid taps within 3 seconds opens the admin PIN prompt
    if (taps.current.length >= 5) {
      taps.current = []
      openAdmin()
    }
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand" onClick={handleSecretTap} role="button" tabIndex={0} aria-label={`${designer.handle} (double-tap to toggle)`}>
          <span className="brand-dot" aria-hidden="true" />
          <span className="brand-name">{designer.handle}</span>
        </div>
        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/flyers">Flyers</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/banners">Banners</Link>
        </nav>
        <div className="footer-socials">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              title={s.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.icon}
            </a>
          ))}
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} {designer.name} ({designer.handle}) —{' '}
          {designer.title}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

