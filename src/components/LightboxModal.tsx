import { useEffect } from 'react'
import type { Project } from '../data/portfolio'
import { useApp } from '../context/AppContext'

export default function LightboxModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  const { openContact, showToast } = useApp()

  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  const requestSimilar = () => {
    onClose()
    openContact(
      `Hi Tami, I love your ${project.title} design and would like to request similar work!`,
    )
  }

  const shareDesign = async () => {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Ogolo Tamuno — ${project.title}`,
          text: `Check out this design by Ogolo Tamuno (@tami_noi)`,
          url,
        })
      } catch {
        // User dismissed the share sheet — no action needed
      }
    } else {
      try {
        await navigator.clipboard.writeText(url)
        showToast('Link copied to clipboard!')
      } catch {
        const ta = document.createElement('textarea')
        ta.value = url
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
        showToast('Link copied to clipboard!')
      }
    }
  }

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" aria-label="Close" onClick={onClose}>
        ×
      </button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={project.image} alt={`${project.title} — ${project.category}`} />
        <div className="lightbox-caption">
          <h3>{project.title}</h3>
          <p className="card-tag">{project.category}</p>
          <div className="lightbox-actions">
            <button className="btn btn-primary" onClick={requestSimilar}>
              Request Similar Work
            </button>
            <button className="btn btn-ghost" onClick={shareDesign}>
              Share Design
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
