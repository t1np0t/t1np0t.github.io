import { useState } from 'react'
import reactLogo from '../assets/images/react.svg'
import viteLogo from '/vite.svg'
import '../assets/css/App.css'
import { DefaultNavbar } from '../assets/navbars'

export default function CSCLASS() {
  const [count, setCount] = useState(0)

  return (
    <>
      <title>CS Classes</title>
      < DefaultNavbar />
      
      <div class='flex border px-4 border-5 border-secondary rounded text-white justify-content-center align-self-center' style={{ backgroundColor: '#41424c', width: '50vw', marginTop: '4rem'}}>
        <div style={{ height: '1.25rem' }} />

        <div class='container-fluid'>
          <div class='h1'>Advanced Computer Science Content</div>
          <hr class='border border-2 rounded' />

          <div className='align-items-center mb-4'><h2>Journals</h2></div>

          <div class='btn-group-vertical align-items-center'>
            <a href='../Journals/J1002.html' class='journalButton'>J1002: Shell</a>
            <a href='../Journals/J1006.html' class='journalButton'>J1006: Source Control</a>
            <a href='../Journals/J1012.html' class='journalButton'>J1012: Alternative Base Addition</a>
            <a href='../Journals/J1013.html' class='journalButton'>J1013: Boolean Algebra</a>
            <a href='../Journals/J1016.html' class='journalButton'>J1016: Logic Comparsion</a>
            <a href='../Journals/J1017.html' class='journalButton'>J1017: Binary Address</a>
            <a href='../Journals/J1089.html' class='journalButton'>J1089: Hello World</a>
            <a href='../Journals/J1151.html' class='journalButton'>J1151: Conditional and Flow Chart</a>
            <a href='../Journals/J1152.html' class='journalButton'>J1152: While Loops</a>
            <a href='../Journals/J1153.html' class='journalButton'>J1153: Repeat While Loops</a>
          </div>

          <div className='align-items-center p-4'><h2>Essays</h2></div>

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
