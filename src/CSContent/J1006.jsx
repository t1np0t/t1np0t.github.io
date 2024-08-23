import { useEffect } from 'react'
import '../components/css/App.css'
import { DefaultNavbar } from '../components/navbars'

export default function J1006() {

  return (
    <>
      <title>J1006: Source Control</title>

      <DefaultNavbar />
      <div className='flex flex-col justify-center items-center text-white text-start' style={{ marginTop: '3.25rem'}}>
        <div className='p-4' style={{width: '75vw'}}>
          <div class='headerInfo'>Name: Darrion Nguyen</div>
          <div class='headerInfo'>Journal: W1006</div>
          <div class='headerInfo'>Date: 26-Aug-2022</div>
          <div class='title'>Source Control</div>

          <hr className='m-8 border-2 rounded-full'/>

          <div className='journalContent'>
            <p>I recieved assistance from no one.</p>
            <p>I assisted no one.</p>

            <br/>

            <p>1.1 - What is Git communicating to you?</p>
            <p className='journalResponses'>Git is telling you that the file has been successfully commited.</p>

            <p>1.2 - What do you see that is common between this git log command and the previous git commit?</p>
            <p className='journalResponses'>What I see in common is that they both display the commit message you put in.</p>

            <p>1.3 - Why do you think this is?</p>
            <p className='journalResponses'>I think they both display the commit message so you can see what notes you put in which could contain helpful instructions.</p>

            <p>2.1 - What do you notice about file1.txt and file2.txt? How are they displayed in git status?</p>
            <p className='journalResponses'>Both file1.txt and file2.txt are displayed in a red text.</p>

            <p>2.2 - Are both displayed in the same section? If not, why not?</p>
            <p className='journalResponses'>Both file1.txt and file2.txt are displayed within the same section.</p>

            <p>3.1 - What do you notice about file1.txt and file2.txt? How are they displayed in git status?</p>
            <p className='journalResponses'>Both files are now displayed in a green text instead of red text.</p>

            <p>3.2 - Compare and contrast the manner in which two files are displayed.</p>
            <p className='journalResponses'>Both file1.txt and file2.txt are in a green colored text instead of the red text before. There's no difference between how both of them are displayed other than the file names.</p>

            <p>4.1 - How many files are listed as been changed?</p>
            <p className='journalResponses'>2 files have been listed as been changed.</p>

            <p>4.2 - What are the specific differences listed for each file? In what color is the difference displayed?</p>
            <p className='journalResponses'>Any lines removed from files are displayed in red text with a "-" in front, while lines added are in green text with a "+" in front. The most recently edited file is listed first.</p>

            <p>5.1 - Execute the commands "git diff" and also "git diff --cached". What does Git tell you has changed? Why?</p>
            <p className='journalResponses'>When I type "git diff", I get nothing in response, but when I type in "git diff --cached", I get a list of recent changes to files added to Git. I believe this happens because when you add "--cached", you ask for any changes made anytime in the past.</p>

            <hr className='m-8 border-2 rounded-full'/>

            <p>What did I learn? What is the "big idea"?</p>
            <p className='journalResponses'>N/A</p>

            <p>What challenges did I encounter?</p>
            <p className='journalResponses'>N/A</p>

            <p>How could this experience be improved?</p>
            <p className='journalResponses'>N/A</p>

            <p>Free Reflection: How has what I've learned affected my thinking?</p>
            <p className='journalResponses'>N/A</p>

          </div>
        </div>
      </div>
    </>
  );
}