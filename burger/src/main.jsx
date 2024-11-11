import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {} from 'bootstrap/dist/css/bootstrap.min.css'
import {} from 'bootstrap/dist/js/bootstrap.js'
import {} from 'aos/dist/aos.js'
import {} from 'aos/dist/aos.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
