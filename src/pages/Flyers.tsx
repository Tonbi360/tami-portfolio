import { useMemo, useState } from 'react'
import Gallery from '../components/Gallery'
import { flyers } from '../data/portfolio'

const filters = ['All', 'Birthday', 'Sports', 'Event', 'Promo', 'Stationery', 'Celebration', 'Pageant', 'Festive', 'Seasonal']

export default function Flyers() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    if (active === 'All') return flyers
    return flyers.filter((f) => f.category.includes(active.toUpperCase()))
  }, [active])

  return (
    <section className="page">
      <header className="page-head">
        <p className="eyebrow">Portfolio / 01</p>
        <h1>
          Social Media <span className="accent">/</span> Flyer Designs
        </h1>
        <p className="page-sub">
          A collection of social media and event flyers crafted for impact.
        </p>
      </header>

      <div className="filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-pill ${active === f ? 'active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <Gallery items={filtered} />
    </section>
  )
}
