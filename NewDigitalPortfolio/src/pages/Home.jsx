import { useState } from 'react'
import reactLogo from '../assets/images/react.svg'
import viteLogo from '/vite.svg'
import '../assets/css/App.css'
import { DefaultNavbar } from '../assets/navbars'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <title>Digital Portfolio</title>
    < DefaultNavbar />
      <div>
      </div>
    </>
  )
}
