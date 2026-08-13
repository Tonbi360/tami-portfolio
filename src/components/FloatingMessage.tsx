import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'

export default function FloatingMessage() {
  const { openNote } = useApp()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      // Show when scrolled to (or near) the very bottom
      setVisible(scrollTop > docHeight - 100)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      className="fab"
      aria-label="Leave a message"
      onClick={() => openNote()}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fab-icon">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      <span className="fab-label">Leave a Message</span>
    </button>
  )
}
