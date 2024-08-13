import { useState } from 'react'
import reactLogo from '../assets/images/react.svg'
import viteLogo from '/vite.svg'
import '../assets/css/App.css'
import { DefaultNavbar } from '../assets/navbars'

export default function CSII() {
  const [count, setCount] = useState(0)

  return (
    <>
      <title>CS-II</title>
      < DefaultNavbar />
      <div class='flex border px-4 border-5 border-secondary rounded text-white justify-content-center align-self-center' style={{ backgroundColor: '#41424c', width: '50vw', marginTop: '4rem'}}>
        <div style={{ height: '1.25rem' }} />

        <div class='container-fluid'>
          <div class='h1'>Advanced Computer Science II</div>
          <hr class='border border-2 rounded' />

          <div class='align-items-center p-2'><h2>Projects</h2></div>

          <div class='btn-group-vertical align-items-center'>
            <a href='/' class='journalButton'>Placeholder</a>
          </div>


          <div class='align-items-center p-2'><h2>Essays</h2></div>

          <div class='btn-group-vertical align-items-center'>
            <a href='../Projects/ConspiracyTheory.html' class='journalButton'>Conspiracy Theories</a>
          </div>

          <hr class='border border-2 rounded' />
        </div>

        <div style={{ height: '1.25rem' }} />
      </div>
    </>
  )
}
