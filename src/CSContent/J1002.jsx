import { useEffect } from 'react'
import '../components/css/App.css'
import { DefaultNavbar } from '../components/navbars'

export default function J1002() {

  return (
    <>
      <title>J1002: Shell</title>

      <DefaultNavbar />
      <div className='flex flex-col justify-center items-center text-white text-start' style={{ marginTop: '3.25rem'}}>
        <div className='p-4' style={{width: '75vw'}}>
          <div class='headerInfo'>Name: Darrion Nguyen</div>
          <div class='headerInfo'>Journal: W1002</div>
          <div class='headerInfo'>Date: 22-Aug-2022</div>
          <div class='title'>Shell</div>

          <hr className='m-8 border-2 rounded-full'/>

          <div className='journalContent'>
            <p>I recieved assistance from no one.</p>
            <p>I assisted no one.</p>

            <br/>

            <p> 1.1 - Name at least 2 other services that you personally use which are implemented using a Client/Server Model.</p>
            <p className='journalResponses'>Two services that I use which use a Client/Server Model is a Local Area Network and Gmail.</p>

            <p>2.1 - It appears that both Jack Williams and John Williams can have a directory of the same name. Do you think the ability to have two different users create a directory of the same name is important? Why?</p>
            <p className='journalResponses'>I think that the ability to have 2 different users be able to create a directory with the same name would make things more simple rather than having every single file in a server be named different, as this can cause lots of confusion for the people using the server.</p>

            <p>3.1 - Why do you think the home directory has a special symbol to represent it?</p>
            <p className='journalResponses'>The home directory has a special symbol on it so you can tell you are inside the root directory.</p>

            <p>4.1 - Did the prompt change? If so, how? Why is this useful?</p>
            <p className='journalResponses'>The prompt did change. It's useful because it tells you exactly what directory you are currently in.</p>

            <p>5.1 - What happens if you press the up key?</p>
            <p className='journalResponses'>It shows the previous command I inputted.</p>

            <p>5.2 - What happens if you press the down key?</p>
            <p className='journalResponses'>It shows the most recent command I inputted.</p>

            <p>6.1 - Was "Hello World!" printed to the screen as before? If not, why not? What do you think happened to the text?</p>
            <p className='journalResponses'>"Hello World" wasn't printed before because no text was assigned to File.txt, so it printed nothing.</p>

            <p>7.1 - How does ls command differ from the tree command?</p>
            <p className='journalResponses'>ls only gives you a list of the stuff of the current directory you are in, whereas tree shows you everything starting from the current directory into whatever is inside the directories that's in the current directory and so on.</p>

            <p>7.2 - How do you choose one over the other?</p>
            <p className='journalResponses'>I would use ls if I only wanted to see the content inside the current directory I am in. I would use tree if I wanted to see all the descendents within the current directory.</p>

            <p>8.1 - What do you think the argument sleep specifies?</p>
            <p className='journalResponses'>Sleep prevents the system from running commands for the duration of the sleep.</p>

            <p>8.2 - Are you able to prove your hypothesis? How?</p>
            <p className='journalResponses'>I was able to prove my hypothesis by attempting to run a command after I ran the sleep command, and nothing happened.</p>

            <p>9.1 - How is the behavior different from what you expected?</p>
            <p className='journalResponses'>I was still able to run commands.</p>

            <p>9.2 - What do you think it means to run a job in the background?</p>
            <p className='journalResponses'>I think it means to run the command but still allow other commands to be inputted.</p>

            <p>9.3 - What do you think the numbers displayed in brackets specifies?</p>
            <p className='journalResponses'>I think it specifies how many seconds has elapsed since a command was run.</p>

            <p>10.1 - What do you observe as you execute the jobs command?</p>
            <p className='journalResponses'>After running the command, it gave me a list of jobs that are either already finished running or are currently running.</p>

            <p>10.2 - How do you explain your observations?</p>
            <p className='journalResponses'>The number on the left presents the order the command was ran, and the command itself.</p>

            <hr className='m-8 border-2 rounded-full'/>

            <p>What did I learn? What is the "big idea"?</p>
            <p className='journalResponses'>The main idea was to learn the basics of using Tabby.</p>

            <p>What challenges did I encounter?</p>
            <p className='journalResponses'>Sometimes, the commands did not work as expected and I had to find workarounds.</p>

            <p>How could this experience be improved?</p>
            <p className='journalResponses'>N/A</p>

            <p>Free Reflection: How has what I've learned affected my thinking?</p>
            <p className='journalResponses'>I learned the basics of how to use Tabby.</p>

          </div>
        </div>
      </div>
    </>
  );
}