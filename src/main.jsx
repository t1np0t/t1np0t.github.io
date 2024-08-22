import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import CSClass from './CSContent/index.jsx'

import Sample from './CSContent/Sample.jsx'
import J1002 from './CSContent/J1002.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/cs-classes' element={<CSClass/>}/>

        <Route path='/cs-classes/sample' element={<Sample/>}/>
        <Route path='/cs-classes/J1002' element={<J1002/>}/>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
