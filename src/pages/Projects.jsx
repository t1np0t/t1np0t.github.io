import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import '../components/css/App.css'
import { DefaultNavbar } from '../components/navbars'

export default function Projects() {
  const [count, setCount] = useState(0)

  return (
    <>
      <title>Projects</title>
      < DefaultNavbar />
    </>
  )
}