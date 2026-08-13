import { useState, useEffect, type FormEvent } from 'react'
import { useApp } from '../context/AppContext'

const STORAGE_KEY = 'tami_messages'

export default function MessageModal() {
  const { contactOpen, contactPrefill, closeContact } = useApp()
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (contactOpen) {
      setSent(false)
      setMessage(contactPrefill)
    }
  }, [contactOpen, contactPrefill])

  useEffect(() => {
    if (!contactOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeContact()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [contactOpen, closeContact])

  if (!contactOpen) return null

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const existing: unknown[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    existing.push({
      id: crypto.randomUUID(),
      name,
      contact,
      message,
      timestamp: Date.now(),
    })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
    setSent(true)
    setName('')
    setContact('')
    setMessage('')
  }

  return (
    <div className="modal-backdrop" onClick={closeContact}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={closeContact}>
          ×
        </button>
        {sent ? (
          <div className="modal-sent">
            <span className="modal-sent-icon">✓</span>
            <h3>Message Sent to Tami!</h3>
            <p>Thanks for reaching out — I&apos;ll get back to you soon.</p>
            <button className="btn btn-primary" onClick={closeContact}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 className="modal-title">Leave a Message</h3>
            <form className="modal-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </label>
              <label>
                Email / Phone
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="you@email.com or phone"
                />
              </label>
              <label>
                Message
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell Tami about your project…"
                />
              </label>
              <button type="submit" className="btn btn-primary modal-submit">
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
