import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router'
import { SidebarProvider } from './context/SidebarContext'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </StrictMode>
  </BrowserRouter>
)
