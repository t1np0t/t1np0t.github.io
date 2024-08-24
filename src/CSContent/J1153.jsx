import { useEffect } from 'react'
import '../components/css/App.css'
import { DefaultNavbar } from '../components/navbars'

export default function J1153() {

  return (
    <>
      <title>J1153: Repeat-While Loops</title>

      <DefaultNavbar />
      <div className='flex flex-col justify-center items-center text-white text-start' style={{ marginTop: '3.25rem'}}>
        <div className='p-4' style={{width: '75vw'}}>
          <div class='headerInfo'>Name: Darrion Nguyen</div>
          <div class='headerInfo'>Journal: W1153</div>
          <div class='headerInfo'>Date: 27-Jan-2023</div>
          <div class='title'>Repeat-While Loops</div>

          <hr className='m-8 border-2 rounded-full'/>

          <div className='journalContent'>
            <p>I recieved assistance from no one.</p>
            <p>I assisted no one.</p>

            <br/>

            <p>1.1 - Compare this behavior to that of the while loop. What are the similarities? What are the differences?</p>
            <p className='journalResponses'>A while loop tests for the condition before the statement while the repeat-while loop does this after the statement.</p>

            <p>1.2 - What are the minimum number of times that this loop will execute?</p>
            <p className='journalResponses'>The loop will execute the code at minimum one time.</p>

            <p>1.3 - What is the purpose of the <i>Jump</i> instruction after the <i>consequent</i>?</p>
            <p className='journalResponses'>The purpose of this jump is to loop back to the statement.</p>

            <p>2.1 - Are you able to implement the same functionality found in a <i>while</i> loop using a <i>repeat-while</i> loop, without changing the condition or adding a conditional? Explain and provide an example.</p>
            <p className='journalResponses'>No, it is not possible to do this because a while loop test for true or false before the statement, so the loop might not run at all compared to a repeat-while where it will always run at least once.</p>

            <p>2.2 - Are you able to implement the same functionality found in a repeat-while loop using a while loop, without changing the condition or adding a conditional? Explain and provide an example.</p>
            <p className='journalResponses'>Yes, this can be done by adding an additional statement before the loop begins.</p>

            <hr className='m-8 border-2 rounded-full'/>

            <p>What did I learn? What is the "big idea"?</p>
            <p className='journalResponses'>The big idea was how repeat-loops work and how they differ from while loops.</p>

            <p>What challenges did I encounter?</p>
            <p className='journalResponses'>I did not experience any challenges in this lesson.</p>

            <p>How could this experience be improved?</p>
            <p className='journalResponses'>I don't think anything needs to be changed.</p>

            <p>Free Reflection: How has what I've learned affected my thinking?</p>
            <p className='journalResponses'>This helped me better understand when I should use repeat-loops or while-loops.</p>

          </div>
        </div>
      </div>
    </>
  );
}