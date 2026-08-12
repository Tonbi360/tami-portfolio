import type { Project } from '../data/portfolio'

export default function Gallery({ items }: { items: Project[] }) {
  return (
    <div className="gallery">
      {items.map((item) => (
        <figure className="card" key={item.title}>
          <div className="card-media">
            <img src={item.image} alt={`${item.title} — ${item.category}`} loading="lazy" />
          </div>
          <figcaption className="card-info">
            <h3>{item.title}</h3>
            <p>{item.category}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
