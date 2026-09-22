import { useEffect } from 'react'
import '../components/css/App.css'
import { DefaultNavbar } from '../components/misc'

import NotGate from '/NotGate.png'

export default function J1017() {

  return (
    <>
      <title>J1017: Binary Adders</title>

      <DefaultNavbar />
      <div className='flex flex-col justify-center items-center text-white text-start' style={{ marginTop: '3.25rem'}}>
        <div className='p-4' style={{width: '75vw'}}>
          <div class='headerInfo'>Name: Darrion Nguyen</div>
          <div class='headerInfo'>Journal: W1017</div>
          <div class='headerInfo'>Date: 13-Oct-2022</div>
          <div class='title'>Binary Adders</div>

          <hr className='m-8 border-2 rounded-full'/>

          <div className='journalContent'>
            <p>I recieved assistance from no one.</p>
            <p>I assisted no one.</p>

            <br/>

            <p>1.1 - What truth table do you recognize that produces the output of the Carry column?</p>
            <p className='journalResponses'>The AND truth table produces the output for the Carry column.</p>

            <p>1.2 - What truth table do you recognize that produces the output of the Sum column?</p>
            <p className='journalResponses'>The XOR truth table produces the output for the Sum column.</p>

            <p>2.1 - What do you notice about the relationship between the first half (top four rows) of the full-adder as compared to all of the rows of the half-adder?</p>
            <p className='journalResponses'>The S output for the first half of the Full-Adder table is the same.</p>

            <p>2.2 - Why do you think this is true?</p>
            <p className='journalResponses'>I believe this is true because there are no Carry Ins for the first half, which would add another bit to the sum of the <i>a</i> and <i>b</i> inputs.</p>

            <p>3.1 - Why does the least significant bit position use a half-adder rather than a full-adder?</p>
            <p className='journalResponses'>The least significant bit position uses a half-adder because there is no 3rd bit to add in, so therefore a Carry In is not required.</p>

            <p>3.2 - Assume that proper inputs are applied for all bit in numbers <i>A</i> and <i>B</i>. Will the correct output from S be avaiable instantaneously? If not, why not?</p>
            <p className='journalResponses'>No, because the sum of the inputs from the half-adder have to be considered first, as well as any potential other full-adders.</p>

            <p>3.3 - Assume that we have a standard (non-scientific calculator) capable of adding two 16-bit words. Two numbers, A and B, are added together. After the addition, it is noted that <i>C15</i> is high. What can we infer. What is this state commonly called?</p>
            <p className='journalResponses'>It can be inferred that the number being calculated is higher than the 16 bit integer is. This is called overflow, or the 16 bit integer limit.</p>

            <hr className='m-8 border-2 rounded-full'/>

            <p>1. Create a half adder.</p>
            <a className='flex justify-center m-16' href='https://tinyurl.com/2ntx33so' target='_blank'><img src='/Half-Adder.png'/></a>

            <p>2. Create a full adder.</p>
            <a className='flex justify-center m-16' href='https://tinyurl.com/2nkjgwr5' target='_blank'><img src='/Full-Adder.png'/></a>

            <hr className='m-8 border-2 rounded-full'/>

            <p>What did I learn? What is the "big idea"?</p>
            <p className='journalResponses'>I learned how half and full adders worked.</p>

            <p>What challenges did I encounter?</p>
            <p className='journalResponses'>A challenge I encountered was how the full-adder worked.</p>

            <p>How could this experience be improved?</p>
            <p className='journalResponses'>I don't think it needs to be improved.</p>

            <p>Free Reflection: How has what I've learned affected my thinking?</p>
            <p className='journalResponses'>I learned how half and full adders worked.</p>

          </div>
        </div>
      </div>
    </>
  );
}