import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/style.scss'
import App from './App.jsx'

import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'weather-icons/css/weather-icons.min.css'

createRoot(document.getElementById('root')).render(
  <App />
)
