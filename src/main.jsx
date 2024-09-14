import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import VerticalTimeline1 from './VerticalTimeline.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <VerticalTimeline1/> */}
  </StrictMode>,
)
