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

      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>

      < DefaultNavbar />
      <div className='flex flex-col justify-center items-center text-white' style={{ marginTop: '20rem'}}>
        <div className='flex flex-col justify-center items-center' style={{width: '90vw', height: '50vh'}}>
          <div className='flex flex-col space-y-8 items-center'>
            <h2>Welcome to my Digital Portfolio!</h2>
            <div className='text-wrap' style={{ width: '50vh' }}><p>I am a student at Allen High School, who plans to major in Computer Science.</p></div>
          </div>

          <img src='/profile.jpg' className='rounded-full aspect-square m-24' style={{ width: '17.5vw' }}></img>

          <div className='py-8 px-48 bg-zinc-900 rounded-lg'>
            <div className='flex flex-row space-x-24 rounded-lg'>

            <a href="https://github.com/darrnguyen" target="_blank" className="infoCard -space-y-2" style={{backgroundColor: '#333333'}}>
                <i class="bi bi-github"></i>
                <div>Github</div>
              </a>

              <a href="/Resume.png" target="_blank" className="infoCard bg-sky-800 -space-y-2">
                <i class="bi bi-person-lines-fill"></i>
                <div>Resume</div>
              </a>

              <a href="https://www.linkedin.com/in/darrion-nguyen-a58b5727a/" target="_blank" className="infoCard -space-y-2" style={{backgroundColor: '#0077B5'}}>
                <i class="bi bi-linkedin"></i>
                <div>Linkedin</div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
