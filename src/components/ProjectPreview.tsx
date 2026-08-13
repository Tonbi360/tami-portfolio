import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Project } from '../data/portfolio'
import { useApp } from '../context/AppContext'
import PortfolioViewer from './PortfolioViewer'
import { lockBodyScroll, unlockBodyScroll } from '../utils/scrollLock'

export default function ProjectPreview({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  const [fullViewOpen, setFullViewOpen] = useState(false)
  const { openRequest, showToast } = useApp()
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!project) return

    const previousOverflow = document.body.style.overflow
    const previousActive = document.activeElement as HTMLElement | null

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKey)
    lockBodyScroll()
    closeButtonRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      unlockBodyScroll()
      previousActive?.focus?.()
    }
  }, [project, onClose])

  if (!project) return null

  if (fullViewOpen) {
    return <PortfolioViewer project={project} onClose={() => setFullViewOpen(false)} />
  }

  const openFullView = () => setFullViewOpen(true)

  const requestSimilar = () => {
    onClose()
    openRequest(
      `Hi Tami, I love your ${project.title} design and would like to request similar work!`,
    )
  }

  const shareDesign = async () => {
    const url = window.location.href

    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: `Check out this design by Tami.`,
          url,
        })
        return
      } catch {
        // User dismissed the share sheet.
      }
    }

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

  return createPortal(
    <div className="preview-backdrop" onClick={onClose}>
      <aside className="preview-card" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeButtonRef}
          className="preview-close"
          aria-label="Close preview"
          onClick={onClose}
        >
          ×
        </button>

        <div className="preview-media">
          <img src={project.image} alt={`${project.title} — ${project.category}`} />
        </div>

        <div className="preview-info">
          <h3>{project.title}</h3>
          <p className="card-tag">{project.category}</p>
        </div>

        <div className="preview-actions">
          <button className="btn btn-primary" type="button" onClick={requestSimilar}>
            Request Similar Work
          </button>
          <button className="btn btn-ghost" type="button" onClick={shareDesign}>
            Share Design
          </button>
          <button className="btn btn-outline" type="button" onClick={openFullView}>
            Full View
          </button>
        </div>
      </aside>
    </div>,
    document.body,
  )
}
