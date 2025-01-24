import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SignUpDiv from './signup'
import StaticPageDiv from './staticPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StaticPageDiv/>
  </StrictMode>
)