import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

// NutriWeek v2 no longer uses the legacy service worker.
// Remove any registration/cache left by the former standalone PWA.
if ('serviceWorker' in navigator) {
  void navigator.serviceWorker.getRegistrations().then(registrations =>
    Promise.all(registrations.map(registration => registration.unregister()))
  )
}
if ('caches' in window) {
  void caches.keys().then(keys =>
    Promise.all(keys.map(key => caches.delete(key)))
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>,
)
