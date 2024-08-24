import { useEffect } from 'react'
import '../components/css/App.css'
import { DefaultNavbar } from '../components/navbars'

export default function J1151() {

  return (
    <>
      <title>J1151: Conditional and Flow Chart</title>

      <DefaultNavbar />
      <div className='flex flex-col justify-center items-center text-white text-start' style={{ marginTop: '3.25rem'}}>
        <div className='p-4' style={{width: '75vw'}}>
          <div class='headerInfo'>Name: Darrion Nguyen</div>
          <div class='headerInfo'>Journal: W1151</div>
          <div class='headerInfo'>Date: 20-Jan-2023</div>
          <div class='title'>Conditional and Flow Chart</div>

          <hr className='m-8 border-2 rounded-full'/>

          <div className='journalContent'>
            <p>I recieved assistance from no one.</p>
            <p>I assisted no one.</p>

            <br/>

            <p>1.1 - How does branching enable significantly more complex program behavior?</p>
            <p className='journalResponses'>It increases the number of options there are which therefore increases the number of different ways a computer program can run.</p>

            <p>1.2 - Why do you think the term <i>consequent</i> is used to refer to the statements that are executed when the <i>Boolean test</i> evaluates to true?</p>
            <p className='journalResponses'>Because whenever the boolean value is true, the program will follow down the normal route whereas false will cause it to run an alternative route.</p>

            <p>2.1 - Why is it the first jump instruction conditional? What determines whether the jump will be exeucuted or not?</p>
            <p className='journalResponses'>Because we need to test whether the comparsion is true or not, and this will determine if the program will jump to the alternative option or not.</p>

            <p>2.2 - What is the purpose of the Jump instruction after the consequent?</p>
            <p className='journalResponses'>So it skips the alternative code and does not run it and jumps to the code under the afterAltnerative section.</p>

            <p>2.3 - Why is there no need for a corresponding Jump instruction after the alternative?</p>
            <p className='journalResponses'>Because since the after Alternative section is after the alternative section, there is no need to jump it because the program will execute whatever line comes next.</p>

            <hr className='m-8 border-2 rounded-full'/>

            <p>What did I learn? What is the "big idea"?</p>
            <p className='journalResponses'>Flow charts can be used to help visualize and orgainze a program.</p>

            <p>What challenges did I encounter?</p>
            <p className='journalResponses'>I had a hard time trying to understand what was going on in the Assembly code.</p>

            <p>How could this experience be improved?</p>
            <p className='journalResponses'>I don't believe it needs to be improved.</p>

            <p>Free Reflection: How has what I've learned affected my thinking?</p>
            <p className='journalResponses'>It made me realize how this could be applied to every day decisions.</p>

          </div>
        </div>
      </div>
    </>
  );
}