import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router'
import { SidebarProvider } from './context/SidebarContext'
import { Provider } from 'react-redux'
import { store } from './store.ts'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </Provider>
    </StrictMode>
  </BrowserRouter>
)
