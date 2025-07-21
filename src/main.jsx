import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import MyApp from './MyApp'
import Welcome from './Welcome'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path = "app" element={<App />} />
      <Route path = "myapp" element={<MyApp />} />
      <Route path = "/" element={<Welcome />} />
    </Routes>
  </BrowserRouter>
)
