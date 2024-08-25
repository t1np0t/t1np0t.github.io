import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import '../components/css/App.css'
import { DefaultNavbar } from '../components/navbars'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <title>Digital Portfolio</title>
      < DefaultNavbar />
      <div className='flex flex-col justify-center items-center text-white' style={{ marginTop: '10rem'}}>
        <div className='flex flex-col p-4 text-4xl justify-center items-center' style={{width: '100vw', height: '50vh'}}>
          Welcome to my Digital Portfolio!
          <img src='/profile.jpg' className='rounded-full aspect-square mt-8' style={{width: '17.5vw'}}></img>
        </div>
      </div>
    </>
  )
}
