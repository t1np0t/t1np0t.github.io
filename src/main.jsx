import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import CSClass from './CSContent/index.jsx'

import J1002 from './CSContent/J1002.jsx'
import J1006 from './CSContent/J1006.jsx'
import J1012 from './CSContent/J1012.jsx'
import J1013 from './CSContent/J1013.jsx'
import J1016 from './CSContent/J1016.jsx'
import J1017 from './CSContent/J1017.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/cs-classes' element={<CSClass/>}/>

        <Route path='/cs-classes/J1002' element={<J1002/>}/>
        <Route path='/cs-classes/J1006' element={<J1006/>}/>
        <Route path='/cs-classes/J1012' element={<J1012/>}/>
        <Route path='/cs-classes/J1013' element={<J1013/>}/>
        <Route path='/cs-classes/J1016' element={<J1016/>}/>
        <Route path='/cs-classes/J1016' element={<J1017/>}/>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
