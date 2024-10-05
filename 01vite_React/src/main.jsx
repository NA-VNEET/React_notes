import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anothertElement = (
  <a href="https://google.com" target="_blank">Visit google</a>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <anothertElement></anothertElement>
  </StrictMode>,
)
