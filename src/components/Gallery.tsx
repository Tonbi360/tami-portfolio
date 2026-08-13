import { useState } from 'react'
import type { Project } from '../data/portfolio'
import ProjectPreview from './ProjectPreview'

export default function Gallery({ items }: { items: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <>
      <div className="gallery">
        {items.map((item) => (
          <figure
            className="card group"
            key={item.id ?? item.title}
            onClick={() => setSelected(item)}
          >
            <div className="card-media overflow-hidden">
              <img src={item.image} alt={`${item.title} — ${item.category}`} loading="lazy" />
            </div>
            <figcaption className="card-info">
              <h3>{item.title}</h3>
              <p className="card-tag">{item.category}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <ProjectPreview project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
