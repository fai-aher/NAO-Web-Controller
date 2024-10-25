import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './Pages/AppRouter'
import './index.css'
import { Header } from './Pages/Header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <AppRouter />
  </StrictMode>,
)
