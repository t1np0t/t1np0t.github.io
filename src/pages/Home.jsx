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
      <div className='flex flex-col justify-center items-center text-white' style={{ marginTop: '15rem'}}>
        <div className='flex flex-col justify-center items-center' style={{width: '100vw', height: '50vh'}}>
          <div className='flex flex-col space-y-8 items-center'>
            <h2>Welcome to my Digital Portfolio!</h2>
            <div className='text-wrap' style={{width: '50vh'}}><p>I am a student at Allen High School, who plans to major in Computer Science.</p></div>
          </div>
          <img src='/profile.jpg' className='rounded-full aspect-square m-24' style={{width: '17.5vw'}}></img>
        </div>
      </div>
    </>
  )
}
