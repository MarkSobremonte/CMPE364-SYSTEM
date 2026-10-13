import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RecordList from './components/RecordList'
import RecordForm from './components/RecordForm.jsx'
import { useEffect } from 'react'
import RecordPage from './components/RecordPage'
import StatusBanner from './components/StatusBanner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
