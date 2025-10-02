import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Immediately scroll to top on page load/refresh
window.scrollTo(0, 0)

// Also scroll to top before React renders
document.documentElement.scrollTop = 0
document.body.scrollTop = 0

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)