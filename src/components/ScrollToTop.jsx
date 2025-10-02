import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  // Scroll to top on initial page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Scroll to top whenever the pathname changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' for immediate scroll
    })
  }, [pathname])

  // Handle browser refresh/reload
  useEffect(() => {
    const handleLoad = () => {
      window.scrollTo(0, 0)
    }

    // Scroll to top when page is loaded
    if (document.readyState === 'complete') {
      window.scrollTo(0, 0)
    } else {
      window.addEventListener('load', handleLoad)
    }

    // Also handle page visibility changes (e.g., switching tabs back)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        window.scrollTo(0, 0)
      }
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('load', handleLoad)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return null
}

export default ScrollToTop