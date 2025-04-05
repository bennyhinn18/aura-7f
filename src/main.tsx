import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuraWebsite from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuraWebsite />
  </StrictMode>,
)
