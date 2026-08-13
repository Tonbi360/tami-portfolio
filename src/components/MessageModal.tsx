import { useState, useEffect, type FormEvent } from 'react'
import { useApp } from '../context/AppContext'

const STORAGE_KEY = 'tami_messages'

const SERVICES = [
  'Social Media Flyer',
  'Logo & Branding',
  'Banner / Print Media',
  'Other',
]

export default function MessageModal() {
  const { contactOpen, contactPrefill, closeContact } = useApp()
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [service, setService] = useState(SERVICES[0])
  const [budget, setBudget] = useState('')
  const [deadline, setDeadline] = useState('')
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
      message: message || '',
      service,
      budget,
      deadline,
      timestamp: Date.now(),
    })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
    setSent(true)
    setName('')
    setContact('')
    setBudget('')
    setDeadline('')
    setMessage('')
  }

  return (
    <div className="modal-backdrop" onClick={closeContact}>
      <div className="modal modal-wide" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={closeContact}>
          ×
        </button>
        {sent ? (
          <div className="modal-sent">
            <span className="modal-sent-icon">✓</span>
            <h3>Inquiry Sent to Tami! ✓</h3>
            <p>Thanks for reaching out — Tami will get back to you soon.</p>
            <button className="btn btn-primary" onClick={closeContact}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 className="modal-title">Work With Me</h3>
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
                Email / WhatsApp Phone
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="you@email.com or phone"
                />
              </label>
              <label>
                Service Required
                <span className="select-wrap">
                  <select value={service} onChange={(e) => setService(e.target.value)}>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="select-chevron"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </label>
              <label>
                Estimated Budget
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g. ₦50,000–₦100,000"
                />
              </label>
              <label>
                Deadline
                <input
                  type="text"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  placeholder="e.g. 2 weeks / ASAP"
                />
              </label>
              <label>
                Brief / Message
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell Tami about your project…"
                />
              </label>
              <button type="submit" className="btn btn-primary modal-submit">
                Send Inquiry
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
