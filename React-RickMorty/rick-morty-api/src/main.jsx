import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RickMortyMainPage from './pages/RickMortyMainPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RickMortyMainPage />
  </StrictMode>,
)
