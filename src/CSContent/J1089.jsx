import { useEffect } from 'react'
import '../components/css/App.css'
import { DefaultNavbar } from '../components/navbars'

export default function J1089() {

  return (
    <>
      <title>J1089: Hello World</title>

      <DefaultNavbar />
      <div className='flex flex-col justify-center items-center text-white text-start' style={{ marginTop: '3.25rem'}}>
        <div className='p-4' style={{width: '75vw'}}>
          <div class='headerInfo'>Name: Darrion Nguyen</div>
          <div class='headerInfo'>Journal: W1089</div>
          <div class='headerInfo'>Date: 20-Jan-2023</div>
          <div class='title'>Hello World</div>

          <hr className='m-8 border-2 rounded-full'/>

          <div className='journalContent'>
            <p>I recieved assistance from no one.</p>
            <p>I assisted no one.</p>

            <br/>

            <p>1.1 - Why do you think Hello world is typically the first program taught to students?</p>
            <p className='journalResponses'>This is because it is simple task to accomplish and lets them begin to learn the basics.</p>

            <p>1.2 - How might Hello World program be different, depending on the programming language it's written in?</p>
            <p className='journalResponses'>Different languages have different syntax, so depending on the language, you may need to write more or less lines of code.</p>

            <hr className='m-8 border-2 rounded-full'/>

            <p>What did I learn? What is the "big idea"?</p>
            <p className='journalResponses'>I learned that "Hello World" is used to introduce people to the basics of programming.</p>

            <p>What challenges did I encounter?</p>
            <p className='journalResponses'>Attempting to print Hello World was much more difficult than other languages.</p>

            <p>How could this experience be improved?</p>
            <p className='journalResponses'>For the mission, I think it's too repetitive to print Hello World in 12 different languages.</p>

            <p>Free Reflection: How has what I've learned affected my thinking?</p>
            <p className='journalResponses'>I learned how to print Hello World in several different languages.</p>

          </div>
        </div>
      </div>
    </>
  );
}