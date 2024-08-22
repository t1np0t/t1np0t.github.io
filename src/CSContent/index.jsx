import { useEffect } from 'react'
import '../components/css/Journal.css'
import { DefaultNavbar } from '../components/navbars'
import { Link } from 'react-router-dom'

export default function CSCLASS() {
/*
  useEffect(() => {

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  */

  return (
    <>
      <title>CS Classes</title>

      <div className='fixed container px-4 rounded-lg text-white sticky justify-center items-center pt-5 pb-5 z-0' style={{backgroundColor: '#252525', width: '50vw', marginTop: '3.25rem'}}>

      < DefaultNavbar/>

        <div>
          <h1>Advanced Computer Science Content</h1>
          <hr className='flex my-5 border-2 rounded-lg' />

          <div className='flex flex-col items-center mb-5'><h2>Journals</h2></div>

          <div className='flex flex-col items-center justify-center mx-auto' style={{width: '50%'}}>
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

            <a href='/cs-classes/sample' class='journalButton'>Test</a>
            <a href='/cs-classes/J1002' class='journalButton'>J1002: Shell</a>
            <a href='/cs-classes/J1006' class='journalButton'>J1006 Source Control</a>
          </div>

          <div className='align-items-center p-5'><h2>Essays</h2></div>

          <div class='flex flex-col items-center mx-auto' style={{ width: '50%' }}>
            <a href='../Projects/ConspiracyTheory.html' class='journalButton'>Conspiracy Theories</a>
          </div>

          <hr class='flex my-5 border-2 rounded-lg' />
        </div>
      </div>
    </>
  )
}