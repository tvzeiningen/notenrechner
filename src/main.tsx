import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouteProvider } from './screens/Router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouteProvider initialRoute="Athletics">
      <App />
    </RouteProvider>
  </StrictMode>,
)
