import { useState } from 'react'
import reactLogo from '../components/images/react.svg'
import viteLogo from '/vite.svg'
import '../components/css/App.css'
import { DefaultNavbar } from '../components/navbars'

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
