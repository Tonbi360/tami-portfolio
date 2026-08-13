import { Outlet, ScrollRestoration } from 'react-router-dom'
import { AppProvider, useApp } from '../context/AppContext'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingMessage from './FloatingMessage'
import MessageModal from './MessageModal'
import AdminInbox from './AdminInbox'
import Toast from './Toast'

function GlobalModals() {
  const { toast } = useApp()
  return (
    <>
      <FloatingMessage />
      <MessageModal />
      <AdminInbox />
      {toast && <Toast message={toast} />}
    </>
  )
}

export default function Layout() {
  return (
    <AppProvider>
      <div className="site">
        <ScrollRestoration />
        <Navbar />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
      <GlobalModals />
    </AppProvider>
  )
}
