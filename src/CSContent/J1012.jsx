import { useEffect } from 'react'
import '../components/css/App.css'
import { DefaultNavbar } from '../components/navbars'

export default function J1012() {

  return (
    <>
      <title>J1012: Alternative Base Addition</title>

      <DefaultNavbar />
      <div className='flex flex-col justify-center items-center text-white text-start' style={{ marginTop: '3.25rem'}}>
        <div className='p-4' style={{width: '75vw'}}>
          <div class='headerInfo'>Name: Darrion Nguyen</div>
          <div class='headerInfo'>Journal: W1012</div>
          <div class='headerInfo'>Date: 09-Sept-2022</div>
          <div class='title'>Alternative Base Addition</div>

          <hr className='m-8 border-2 rounded-full'/>

          <div className='journalContent'>
            <p>I recieved assistance from no one.</p>
            <p>I assisted no one.</p>

            <br/>

            <p>1.1 - Describe the general process for executing addition, regardless of base.</p>
            <p className='journalResponses'>You need the 2 numbers together and if the sum of the 2 numbers is more than the max number allowed in a place, then you do the sum of the 2 numbers minus the max allowed for a single place and put it in that place and carry a 1 over to the next place.</p>

            <p>2.1 - What special factors need to be considered when executing addition with octal numbers?</p>
            <p className='journalResponses'>Instead of carrying over a 1 when the sum of 2 numbers is greater than or equals 10, you have to carry a 1 over if it equals or is greater than 8.</p>

            <p>3.1 - What special factors need to be considered when executing addition with hexadecimal numbers?</p>
            <p className='journalResponses'>Instead of carrying over a 1 when the sum of 2 numbers is greater than or equals 10, you have to carry a 1 over to the next place if the sum of the 2 numbers equals or is greater than 16. If the sum equals 10, 11, 12, 13 14, or 15, then you use A, B, C, D, and E instead.</p>

            <p>4.1 - What special factors need to be considered when executing addition with binary numbers?</p>
            <p className='journalResponses'>You have to carry over a 1 to the next place if the sum of the 2 numbers are equal to or greater than 1.</p>

            <hr className='m-8 border-2 rounded-full'/>

            <p>What did I learn? What is the "big idea"?</p>
            <p className='journalResponses'>The main idea was to learn how to do addition in multiple different bases, such as octal, hexadecimal, and binary.</p>

            <p>What challenges did I encounter?</p>
            <p className='journalResponses'>When trying to solve the equations on the M1012, it became a very tedious task and I kept making simple errors when trying to add numbers together.</p>

            <p>How could this experience be improved?</p>
            <p className='journalResponses'>I don't think it needs to be improved.</p>

            <p>Free Reflection: How has what I've learned affected my thinking?</p>
            <p className='journalResponses'>I learned how to do additional within bases other than decimal.</p>

          </div>
        </div>
      </div>
    </>
  );
}