import '../components/css/App.css'
import { DefaultNavbar } from '../components/misc'
import { HomePageGraph } from '@/components/graphs'

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim';
import * as motion from 'framer-motion/client'

export default function Home() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#121212",
        },
      },
      fpsLimit: 60,
      interactivity: {
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#121212",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 1,
          width: .5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <>
      <title>Digital Portfolio</title>

      if (init) {
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className='w-full h-full absolute -z-10'
        />
      }

      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      {/* Introduction */}
      <DefaultNavbar />
      <motion.div
        className="flex flex-col justify-center items-center text-white mt-[2.5rem] mb-[12.5rem]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.25 }}
    >
        <div className="flex flex-col justify-center items-center mt-32">
          <div className="flex flex-col space-y-8 items-center">
            <h1 className="mb-[5rem]">Welcome to my Digital Portfolio!</h1>
            <div className="text-wrap w-[20rem] lg:w-[35rem]">
              <h3>
                I am a student at Allen High School, who plans to major in
                Computer Science.
              </h3>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Experience */}
      <motion.div
        className="flex flex-col justify-center items-center text-white mb-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.25 }}
        viewport={{once: true}}
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="mb-[5rem]">Experience</h2>
          <div className="flex flex-col space-y-8 lg:space-x-24 lg:flex-row lg:space-y-0">
            <HomePageGraph />

            <div className="flex flex-col rounded-lg text-white border border-2 text-start p-4 indent-10 w-[80vw] lg:w-[42.5vw] bg-[#252525]">
              <p className="mb-3">
                The first programming language I learned was Lua in mid-2020. I
                learned the fundamentals of programming, including variables,
                functions, conditionals, and loops. Computer Science I was my
                first class into the field of computer science, which I took in
                my sophomore year. In this class, I was introduced to the basics
                of using the shell. The shell, as known as the terminal, is a
                way to interact with the computer's operating system. On top of
                that, I was also introduced to Swift, the basics of computer
                architecture, and began my digital portfolio using just
                Hypertext Markup Langauge (HTML) and Cascading Style Sheets
                (CSS).
              </p>
              <p>
                My Computer Science II course in my junior year focused more on
                sorting algorithms and independent study projects (ISPs), along
                with researchiang about technological conspiracy theories. The
                ISP I created for this class was the Model Scheduler for Allen
                High School, which allowed students to prepare creating their
                schedules for the next school year.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Contact Info */}
      <div className="flex flex-col py-12 bg-[#333333] justify-center items-center w-full text-white absolute left-0">
        <div className="flex flex-row justify-center items-center space-x-4 lg:space-x-24 rounded-lg">
          <a
            href="https://github.com/darrnguyen"
            target="_blank"
            className="infoCard -space-y-2 bg-[#222222]"
          >
            <i className="bi bi-github"></i>
            <div className="infoText">Github</div>
          </a>

          <a
            href="/Resume.png"
            target="_blank"
            className="infoCard bg-sky-800 -space-y-2"
          >
            <i className="bi bi-person-lines-fill"></i>
            <div className="infoText">Resume</div>
          </a>

          <a
            href="https://www.linkedin.com/in/darrion-nguyen-a58b5727a/"
            target="_blank"
            className="infoCard -space-y-2 bg-[#0077B5]"
          >
            <i className="bi bi-linkedin"></i>
            <div className="infoText">Linkedin</div>
          </a>
        </div>
        <a
          className="flex pt-4 docs text-lg"
          href="https://github.com/darrnguyen/darrnguyen.github.io"
          target="_blank"
        >
          This portfolio lives here
        </a>
      </div>
    </>
  );
}
