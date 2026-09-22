import { useEffect } from 'react'
import '../components/css/App.css'
import { DefaultNavbar } from '../components/misc'

export default function J1152() {

  return (
    <>
      <title>J1152: While Loops</title>

      <DefaultNavbar />
      <div className='flex flex-col justify-center items-center text-white text-start' style={{ marginTop: '3.25rem'}}>
        <div className='p-4' style={{width: '75vw'}}>
          <div class='headerInfo'>Name: Darrion Nguyen</div>
          <div class='headerInfo'>Journal: W1152</div>
          <div class='headerInfo'>Date: 27-Jan-2023</div>
          <div class='title'>While Loops</div>

          <hr className='m-8 border-2 rounded-full'/>

          <div className='journalContent'>
            <p>I recieved assistance from no one.</p>
            <p>I assisted no one.</p>

            <br/>

            <p>1.1 - Why is the test executed <i>prior</i> to the loop?</p>
            <p className='journalResponses'>Because it needs to determine whether the test is true or false, so the program knows whether to go through the loop or jump to the alternative.</p>

            <p>1.2 - Compare this diagram to that of the conditional. What are the similarities? What are the differences?</p>
            <p className='journalResponses'>Both of them test for a true or false, and move to the consequent if true or the alternative if false. The difference is that conditionals can only happen once, loops can occur practically an infinite amount of times.</p>

            <p>1.3 - What is the purpose of the <i>jump</i> instruction after the <i>consequent</i>?</p>
            <p className='journalResponses'>The purpose of this jump is to loop back to the test and to see whether the test returns true of false again to see if the loop should be continued or should it should go to the alternative.</p>

            <hr className='m-8 border-2 rounded-full'/>

            <p>What did I learn? What is the "big idea"?</p>
            <p className='journalResponses'>The big idea was how do loops work.</p>

            <p>What challenges did I encounter?</p>
            <p className='journalResponses'>I had a hard time trying to read the Assembly language diagram of a While Loop.</p>

            <p>How could this experience be improved?</p>
            <p className='journalResponses'>I don't think anything needs to be changed.</p>

            <p>Free Reflection: How has what I've learned affected my thinking?</p>
            <p className='journalResponses'>I know how While Loops work.</p>

          </div>
        </div>
      </div>
    </>
  );
}