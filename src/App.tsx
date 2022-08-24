import { useRoutes, useLocation } from 'react-router-dom'
import { cloneElement } from 'react'
import { AnimatePresence } from 'framer-motion'
import Profile from '@/pages/Profile'
import Post from '@/pages/Post'

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Profile />,
    },
    {
      path: '/post/:id',
      element: <Post />,
    },
  ])

  const location = useLocation()

  if (!element) return null

  return (
    <div className="h-screen w-full max-w-md bg-white mx-auto relative mt-16">
      <AnimatePresence>{cloneElement(element, { key: location.pathname })}</AnimatePresence>
    </div>
  )
}

export default App
