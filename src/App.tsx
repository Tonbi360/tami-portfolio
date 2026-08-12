import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Flyers from './pages/Flyers'
import Brands from './pages/Brands'
import Banners from './pages/Banners'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'flyers', element: <Flyers /> },
      { path: 'brands', element: <Brands /> },
      { path: 'banners', element: <Banners /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
