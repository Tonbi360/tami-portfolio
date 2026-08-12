import Gallery from '../components/Gallery'
import { banners } from '../data/portfolio'

export default function Banners() {
  return (
    <section className="page">
      <header className="page-head">
        <p className="eyebrow">Portfolio / 03</p>
        <h1>
          Banners <span className="accent">and</span> Graphics
        </h1>
        <p className="page-sub">
          Banner mockups, print-ready graphics and layout designs.
        </p>
      </header>
      <Gallery items={banners} />
    </section>
  )
}
