import { useEffect } from 'react'
import '../components/css/App.css'
import { DefaultNavbar } from '../components/misc'

export default function J1013() {

  return (
    <>
      <title>J1013: Boolean Algebra</title>

      <DefaultNavbar />
      <div className='flex flex-col justify-center items-center text-white text-start' style={{ marginTop: '3.25rem'}}>
        <div className='p-4' style={{width: '75vw'}}>
          <div class='headerInfo'>Name: Darrion Nguyen</div>
          <div class='headerInfo'>Journal: W1013</div>
          <div class='headerInfo'>Date: 17-Sept-2022</div>
          <div class='title'>Boolean Algebra</div>

          <hr className='m-8 border-2 rounded-full'/>

          <div className='journalContent'>
            <p>I recieved assistance from no one.</p>
            <p>I assisted no one.</p>

            <br/>

            <p>1.1 - Why is one of the symbols used for exclusive disjunction =/?</p>
            <p className='journalResponses'>This is because the three lines indicates that value A and B or identical and the dash through it means not, so the symbol means not identical, which is what a xor function is. It is true in all cases except when A is the same value as B.</p>

            <p>2.1 - Why is the formula for determining the number of rows in a truth table related only to the number of inputs, and why is the formula n^2?</p>
            <p className='journalResponses'>The number of rows in a truth table is related to the number of inputs because the number of rows are dependent on the numbers of inputs there are. The reason why the formula is 2^n is beacause the amount of outputs exponentially increases the more inputs are added into the truth table. You have to add another equation to every existing variable and its variable combinations every time a new variable is introduced.</p>

            <hr className='m-8 border-2 rounded-full'/>

            <p>What did I learn? What is the "big idea"?</p>
            <p className='journalResponses'>The main idea of this lesson was how to do boolean algebra and be able to create truth tables.</p>

            <p>What challenges did I encounter?</p>
            <p className='journalResponses'>When several operations were combined together, such as (true xor false nand true) imply (false nor true and false), it became hard to calculate the operations.</p>

            <p>How could this experience be improved?</p>
            <p className='journalResponses'>I think it could do a better job at explaining the secondary operations.</p>

            <p>Free Reflection: How has what I've learned affected my thinking?</p>
            <p className='journalResponses'>I learned how secondary operations work and how to construct truth tables with operations.</p>

          </div>
        </div>
      </div>
    </>
  );
}