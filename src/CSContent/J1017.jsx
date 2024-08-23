import { useEffect } from 'react'
import '../components/css/App.css'
import { DefaultNavbar } from '../components/navbars'

import NotGate from '/NotGate.png'

export default function J1016() {

  return (
    <>
      <title>J1016: Logic Comparsion</title>

      <DefaultNavbar />
      <div className='flex flex-col justify-center items-center text-white text-start' style={{ marginTop: '3.25rem'}}>
        <div className='p-4' style={{width: '75vw'}}>
          <div class='headerInfo'>Name: Darrion Nguyen</div>
          <div class='headerInfo'>Journal: W1016</div>
          <div class='headerInfo'>Date: 10-Oct-2022</div>
          <div class='title'>Logic Comparison</div>

          <hr className='m-8 border-2 rounded-full'/>

          <div className='journalContent'>
            <p>I recieved assistance from Volkan Ozcomert.</p>
            <p>I assisted Dylan.</p>

            <br/>

            <p>1. Create a NOT Gate:</p>
            <a className='flex justify-center m-16' href='https://tinyurl.com/2kd38wt5' target='_blank'><img src='/NotGate.png'/></a>

            <p>2. Create a AND Gate:</p>
            <a className='flex justify-center m-16' href='https://tinyurl.com/2kd38wt5' target='_blank'><img src='/AndGate.png'/></a>

            <p>3. Create a OR Gate:</p>
            <a className='flex justify-center m-16' href='https://tinyurl.com/2kd38wt5' target='_blank'><img src='/OrGate.png'/></a>

            <p>4. Create a XOR Gate:</p>
            <a className='flex justify-center m-16' href='https://tinyurl.com/2kd38wt5' target='_blank'><img src='/XorGate.png'/></a>

            <p>5. Create a NOR Gate:</p>
            <a className='flex justify-center m-16' href='https://tinyurl.com/2kd38wt5' target='_blank'><img src='/NorGate.png'/></a>

            <p>6. Excursion Exercise: Create a 7-digit display that displays hexidecmials 1 to F.</p>
            <a className='flex justify-center m-16' href='https://tinyurl.com/2kd38wt5' target='_blank'><img src='/Excursion.png'/></a>

            <hr className='m-8 border-2 rounded-full'/>

            <p>What did I learn? What is the "big idea"?</p>
            <p className='journalResponses'>I learned how logic gates worked and how to use them.</p>

            <p>What challenges did I encounter?</p>
            <p className='journalResponses'>Attempting to construct the 7-segment display using a 4-bit binary input was difficult to accomplish.</p>

            <p>How could this experience be improved?</p>
            <p className='journalResponses'>It would help if there was more guidance on what to do for the 7-segment display.</p>

            <p>Free Reflection: How has what I've learned affected my thinking?</p>
            <p className='journalResponses'>I learned how logic gates are used to operate electronic devices.</p>

          </div>
        </div>
      </div>
    </>
  );
}