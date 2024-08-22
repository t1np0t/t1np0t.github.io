import { useEffect } from 'react'
import '../components/css/App.css'
import { DefaultNavbar } from '../components/navbars'

export default function Sample() {

  return (
    <>
      <title>Sample</title>

      <DefaultNavbar/>

      <div className='flex pt-16 container justify-center align-center'>
          <p>hi</p>
      </div>
    </>
  )
}