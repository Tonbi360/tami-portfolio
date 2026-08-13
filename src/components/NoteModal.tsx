import { useState, useEffect, type FormEvent } from 'react'
import { useApp } from '../context/AppContext'

const STORAGE_KEY = 'tami_messages'

export default function NoteModal() {
  const { noteOpen, notePrefill, closeNote, showToast } = useApp()
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (noteOpen) {
      setSent(false)
      setMessage(notePrefill)
    }
  }, [noteOpen, notePrefill])

  useEffect(() => {
    if (!noteOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeNote()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [noteOpen, closeNote])

  if (!noteOpen) return null

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const existing: unknown[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]',
    )
    existing.push({
      id: crypto.randomUUID(),
      name,
      contact: '',
      message,
      timestamp: Date.now(),
    })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
    setSent(true)
    setName('')
    setMessage('')
    showToast('Message sent!')
  }

  return (
    <div className="modal-backdrop" onClick={closeNote}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={closeNote}>
          ×
        </button>
        {sent ? (
          <div className="modal-sent">
            <span className="modal-sent-icon">✓</span>
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out — Tami will get back to you soon.</p>
            <button className="btn btn-primary" onClick={closeNote}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 className="modal-title">Leave a Message</h3>
            <form className="modal-form" onSubmit={handleSubmit}>
              <label>
                Name / Contact
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name or handle"
                />
              </label>
              <label>
                Quick Message
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Drop a quick note for Tami…"
                />
              </label>
              <button type="submit" className="btn btn-primary modal-submit">
                Send
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
</content>
