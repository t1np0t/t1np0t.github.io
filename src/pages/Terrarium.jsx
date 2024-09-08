import '../components/css/App.css'
import { DefaultNavbar } from '../components/misc'

export default function Terrarium() {

    return (
        <>
            <title>Terrarium Article</title>

            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
                />
            </head>

            <DefaultNavbar />
            <div className='flex flex-col justify-center items-center text-white text-start mt-[3.25rem]'>
                <div className='p-4 w-[100%] mb-[5rem]'>
                    <h1>Why Roblox?</h1>

                    <hr className='m-8 border-2 rounded-full mx-auto w-full'/>

                    <p className='indent-12'>
                        I chose Roblox because it is free to use and publish a game unlike most other game engines available. It also features built in multiplayer integration
                        that lets developers make any game multiplayer without having to pay for servers and it has the ability to be used across several different platforms, ranging from
                        computers, to mobile devices, to consoles. On top of that, Roblox has a method of converting its in game currency, Robux, into real money through its Developer Exchange
                        program, albeit the compensation is not the best.</p>
                </div>

                <div className='p-4 w-[100%]'>
                    <h1>Rendering Units</h1>

                    <hr className='m-8 border-2 rounded-full mx-auto w-full' />

                    <p className='indent-12'>
                        By default, Roblox Studio uses single threading, meaning that the code has to wait for previous code to execute before it can move on. This means that it was paramount that
                        the unit rendering system was optimized, as it was one of the most resource intensive components of the game. A big mistake I made early in the development progress was relying
                        on just the server to render the units. Because the instance is rendered on the server side, the server is constantly calculating the physics in the background, which creates a tiny
                        delay in the thread. All of these delays add up, significantly affecting all scripts and slowing the entire game down. 
                    </p>
                    <div className='flex flex-row-4 justify-center items-center my-8 space-x-4'>
                        <div className='flex flex-col'>
                            <img src='/Example1.png' className='flex rounded-lg'/>
                            <p className='text-center'>Client (User) Side</p>
                        </div>
                        <div className='flex flex-col'>
                            <img src='/Example1.png' className='flex rounded-lg'/>
                            <p className='text-center'>Server Side</p>
                        </div>
                    </div>
                </div>

                <p className='indent-12'>
                    A fix I made was that instead of having the entire unit be rendered on the server, only the hitbox would be rendered, whilst the rest of the unit is rendered locally on the device.
                    This is done by first using a remote event, which allows server-sided scripts to communicate with client-sided ones and vice versa. While this takes a huge amount of work off of the
                    server, the work is now put onto the user's device, which can cause a large drop in frames per second (FPS) if their device is old enough.
                </p>

                <div className='flex flex-row-4 justify-center items-center my-8 space-x-4'>
                    <div className='flex flex-col'>
                        <img src='/Example2b.png' className='flex rounded-lg'/>
                        <p className='text-center'>Client (User) Side</p>
                    </div>
                    <div className='flex flex-col'>
                        <img src='/Example2a.png' className='flex rounded-lg'/>
                        <p className='text-center'>Server Side</p>
                    </div>
                </div>
            </div>
        </>
    );
}