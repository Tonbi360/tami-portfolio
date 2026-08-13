import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { Project } from '../data/portfolio'
import { lockBodyScroll, unlockBodyScroll } from '../utils/scrollLock'

export default function PortfolioViewer({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
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

  return createPortal(
    <div className="fullview-backdrop" onClick={onClose}>
      <div className="fullview-stage" onClick={(e) => e.stopPropagation()}>
        <button
          className="fullview-close"
          aria-label="Close full view"
          onClick={onClose}
          ref={closeButtonRef}
        >
          ×
        </button>
        <img
          className="fullview-image"
          src={project.image}
          alt={`${project.title} — ${project.category}`}
        />
      </div>
    </div>,
    document.body,
  )
}
