import { useState } from 'react'
import '../components/css/App.css'
import { DefaultNavbar } from '../components/navbars'

export default function Projects() {
  const [count, setCount] = useState(0)

  return (
    <>
      <title>Projects</title>
      < DefaultNavbar />

      <div className='flex flex-col justify-center items-center text-white' style={{ marginTop: '7.5rem'}}>
        <h1>Projects</h1>
        <div className='card'>Project Title Goes Here</div>
        <div className='card'>Project Title Goes Here</div>
      </div>
    </>
  )
}