import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type AdminMessage = {
  id: string
  name: string
  contact: string
  message: string
  timestamp: number
}

type AppContextType = {
  contactOpen: boolean
  contactPrefill: string
  openContact: (prefill?: string) => void
  closeContact: () => void
  adminOpen: boolean
  openAdmin: () => void
  closeAdmin: () => void
  toast: string | null
  showToast: (msg: string) => void
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [contactOpen, setContactOpen] = useState(false)
  const [contactPrefill, setContactPrefill] = useState('')
  const [adminOpen, setAdminOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  const openContact = useCallback((prefill = '') => {
    setContactPrefill(prefill)
    setContactOpen(true)
  }, [])

  const closeContact = useCallback(() => {
    setContactOpen(false)
    setContactPrefill('')
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
        adminOpen,
        openAdmin,
        closeAdmin,
        toast,
        showToast,
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
