import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/style.scss'
import App from './App.jsx'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

createRoot(document.getElementById('root')).render(
  <App />
)
