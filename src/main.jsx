import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { createBrowserRouter } from 'react-router'
import routes from './Routes.jsx'

const router = createBrowserRouter(routes);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter router={router}/>
  </StrictMode>,
)
