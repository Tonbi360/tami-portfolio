import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'

export type AdminMessage = {
  id: string
  name: string
  contact: string
  message: string
  timestamp: number
  service?: string
  budget?: string
  deadline?: string
}

type AppContextType = {
  contactOpen: boolean
  contactPrefill: string
  openContact: (prefill?: string) => void
  closeContact: () => void
  requestOpen: boolean
  requestPrefill: string
  openRequest: (prefill?: string) => void
  closeRequest: () => void
  noteOpen: boolean
  notePrefill: string
  openNote: (prefill?: string) => void
  closeNote: () => void
  adminOpen: boolean
  openAdmin: () => void
  closeAdmin: () => void
  toast: string | null
  showToast: (msg: string) => void
  available: boolean
  setAvailable: (v: boolean) => void
}

const AVAIL_KEY = 'availabilityStatus'
const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [contactOpen, setContactOpen] = useState(false)
  const [contactPrefill, setContactPrefill] = useState('')
  const [requestOpen, setRequestOpen] = useState(false)
  const [requestPrefill, setRequestPrefill] = useState('')
  const [noteOpen, setNoteOpen] = useState(false)
  const [notePrefill, setNotePrefill] = useState('')
  const [adminOpen, setAdminOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [available, setAvailableState] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem(AVAIL_KEY)
    if (stored !== null) setAvailableState(stored === 'true')
  }, [])

  const setAvailable = useCallback((v: boolean) => {
    setAvailableState(v)
    localStorage.setItem(AVAIL_KEY, v ? 'true' : 'false')
  }, [])

  const openContact = useCallback((prefill = '') => {
    setContactPrefill(prefill)
    setContactOpen(true)
  }, [])

  const closeContact = useCallback(() => {
    setContactOpen(false)
    setContactPrefill('')
  }, [])

  const openRequest = useCallback((prefill = '') => {
    setRequestPrefill(prefill)
    setRequestOpen(true)
  }, [])

  const closeRequest = useCallback(() => {
    setRequestOpen(false)
    setRequestPrefill('')
  }, [])

  const openNote = useCallback((prefill = '') => {
    setNotePrefill(prefill)
    setNoteOpen(true)
  }, [])

  const closeNote = useCallback(() => {
    setNoteOpen(false)
    setNotePrefill('')
  }, [])

  const openAdmin = useCallback(() => setAdminOpen(true), [])
  const closeAdmin = useCallback(() => setAdminOpen(false), [])

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(null), 2000)
  }, [])

  return (
    <AppContext.Provider
      value={{
        contactOpen,
        contactPrefill,
        openContact,
        closeContact,
        noteOpen,
        notePrefill,
        openNote,
        closeNote,
        adminOpen,
        openAdmin,
        closeAdmin,
        toast,
        showToast,
        available,
        setAvailable,
        requestOpen,
        requestPrefill,
        openRequest,
        closeRequest,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
