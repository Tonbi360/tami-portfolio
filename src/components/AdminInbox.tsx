import { useState, useEffect, type FormEvent } from 'react'
import { useApp, type AdminMessage } from '../context/AppContext'

const STORAGE_KEY = 'tami_messages'
const PASSCODE = '1234'

function loadMessages(): AdminMessage[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

export default function AdminInbox() {
  const { adminOpen, closeAdmin } = useApp()
  const [pin, setPin] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState(false)
  const [messages, setMessages] = useState<AdminMessage[]>([])

  useEffect(() => {
    if (adminOpen) {
      setPin('')
      setError(false)
      setUnlocked(false)
      setMessages(loadMessages())
    }
  }, [adminOpen])

  useEffect(() => {
    if (!adminOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAdmin()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [adminOpen, closeAdmin])

  if (!adminOpen) return null

  const handleUnlock = (e: FormEvent) => {
    e.preventDefault()
    if (pin === PASSCODE) {
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  const clearInbox = () => {
    localStorage.removeItem(STORAGE_KEY)
    setMessages([])
  }

  const formatDate = (ts: number) =>
    new Date(ts).toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    })

  return (
    <div className="modal-backdrop" onClick={closeAdmin}>
      <div className="modal modal-wide" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={closeAdmin}>
          ×
        </button>
        {!unlocked ? (
          <>
            <h3 className="modal-title">Admin Inbox</h3>
            <form className="modal-form" onSubmit={handleUnlock}>
              <label>
                Passcode
                <input
                  type="password"
                  inputMode="numeric"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Enter PIN"
                />
              </label>
              {error && <p className="modal-error">Incorrect passcode. Try again.</p>}
              <button type="submit" className="btn btn-primary modal-submit">
                Unlock
              </button>
            </form>
          </>
        ) : (
          <>
            <h3 className="modal-title">Inbox ({messages.length})</h3>
            {messages.length === 0 ? (
              <p className="modal-empty">No messages yet.</p>
            ) : (
              <ul className="inbox-list">
                {messages.map((m) => (
                  <li key={m.id} className="inbox-item">
                    <div className="inbox-head">
                      <strong>{m.name}</strong>
                      <span className="inbox-contact">{m.contact}</span>
                    </div>
                    <p className="inbox-text">{m.message}</p>
                    <span className="inbox-time">{formatDate(m.timestamp)}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="modal-actions">
              <button className="btn btn-ghost" onClick={clearInbox}>
                Clear Inbox
              </button>
              <button className="btn btn-primary" onClick={closeAdmin}>
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
