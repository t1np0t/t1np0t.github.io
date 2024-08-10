import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/index.css'

import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import CSI from './pages/CSI.jsx'
import CSII from './pages/CSII.jsx'

// Import our custom CSS
import './styles.scss'

// Import all of Bootstrap's JS
//import * as bootstrap from 'bootstrap'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/cs-i' element={<CSI/>}/>
        <Route path='/cs-ii' element={<CSII/>}/>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
