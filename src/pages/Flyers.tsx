import Gallery from '../components/Gallery'
import { flyers, designer } from '../data/portfolio'

export default function Flyers() {
  return (
    <section className="page page-grid-bg">
      <header className="page-head">
        <p className="eyebrow">Portfolio / 01</p>
        <h1>
          Social Media <span className="accent">/</span> Flyer Designs
        </h1>
        <p className="page-sub">
          A collection of social media and event flyers crafted for impact.
        </p>
      </header>
      <Gallery items={flyers} />
    </section>
  )
}
