import Gallery from '../components/Gallery'
import { brands } from '../data/portfolio'

export default function Brands() {
  return (
    <section className="page">
      <header className="page-head">
        <p className="eyebrow">Portfolio / 02</p>
        <h1>
          Brand <span className="accent">Designs</span>
        </h1>
        <p className="page-sub">
          Logos, brand marks and wordmarks built to last.
        </p>
      </header>
      <Gallery items={brands} />
    </section>
  )
}
