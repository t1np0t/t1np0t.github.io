import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import * as motion from "framer-motion/client";

import {
  Card,
  CardContent,
  //CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
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
          width: 0.5,
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
    <main className="relative w-full max-w-full min-h-screen">
      <title>Digital Portfolio</title>
      {/*{init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="w-full h-max absolute -z-10"
        />
      )}*/}
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      {/* Introduction */}
      <motion.div
        className="flex flex-col justify-center items-center text-white mt-[-1.5rem]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col justify-center items-center mt-16">
          <div className="flex flex-col space-y-8 items-center">
            <h1 className="mb-[1rem]">Welcome, I'm Darrion!</h1>
            <div className="text-center w-full max-w-[25rem] sm:w-[35rem] lg:w-[45rem]">
              <h3>
                I am a sophomore at the University of Texas at Dallas, majoring
                in Computer Science.
              </h3>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col justify-center items-center text-white mt-[2.5rem]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col justify-center items-center mt-16">
          <button className="rounded-md border border-white px-4">
            <motion.a
              className="flex flex-row space-x-2 justify-center items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document
                  .getElementById("Academic Projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <i className="bi bi-chevron-down" />
              <h2 className="my-4 px-8">Projects</h2>
              <i className="bi bi-chevron-down" />
            </motion.a>
          </button>
        </div>
      </motion.div>
      {/* Contact */}
      <motion.div
        className="flex flex-col justify-center items-center text-white mb-32 mt-[5rem]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col justify-start items-start w-full max-w-4xl">
          <h2>Contact</h2>
          <hr className="my-4 w-full border-1 border-white rounded-full" />
          <div className="w-full">
            <div className="flex flex-row justify-center items-center gap-2 lg:gap-8 w-full">
              <a
                href="https://github.com/t1np0t"
                target="_blank"
                className="infoCard -space-y-2 bg-[#333333]"
              >
                <i className="bi bi-github"></i>
                <div className="infoText">Github</div>
              </a>

              <a
                href="/Resume.pdf"
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
          </div>
        </div>
      </motion.div>

      {/* Academic Projects */}
      <div className="flex flex-col justify-center items-center text-white mt-[15rem] w-full">
        <div
          id="Academic Projects"
          className="flex flex-col justify-start items-start w-full max-w-4xl"
        >
          <h2>Academic Projects</h2>
          <hr className="my-4 w-full border-1 border-white rounded-full" />
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0">
            <div className="flex flex-col justify-center items-center">
              <Card className="card w-full pt-2">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl">
                    Model Scheduler
                  </CardTitle>
                </CardHeader>

                <CardContent className="">
                  <img
                    src="/ModelScheduler.png"
                    className="flex rounded-lg mx-auto h-auto w-3/4"
                  />
                  <p className="mt-4 indent-10 text-start">
                    A collaborative project that
                    helped students at my high school build their schedule for
                    the following school year based off data provided. I
                    assisted in the designing and implementation of the home and
                    scheduling page using React and TailwindCSS.
                  </p>
                </CardContent>

                <CardFooter className="flex flex-row pt-0 pb-2">
                  <a
                    className="projectLink font-bold"
                    target="_blank"
                    href="https://github.com/Allen-ISD-Computer-Science/REPO_ModelScheduler_2024"
                  >
                    <i className="bi bi-github text-3xl p-2"></i>
                    Github Repo
                  </a>
                </CardFooter>
              </Card>

              <Card className="card w-full pt-2">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl">
                    Notebook
                  </CardTitle>
                </CardHeader>

                <CardContent className="">
                  <img
                    src="/NebulaNotebook.png"
                    className="flex rounded-lg mx-auto h-auto w-3/4"
                  />
                  <p className="mt-4 indent-10 text-start">
                    An open-source project that lets students at the
                    University of Texas at Dallas to share notes with each other
                    for classes. As a contributor, I worked on implementing the
                    front end UI designs using React and TailwindCSS, as well as
                    implementing and testing the file uploading system using
                    PostgreSQL
                  </p>
                </CardContent>

                <CardFooter className="flex flex-row pt-0 pb-2">
                  <a
                    className="projectLink font-bold"
                    target="_blank"
                    href="https://github.com/UTDNebula/utd-notebook"
                  >
                    <i className="bi bi-github text-3xl p-2"></i>
                    Github Repo
                  </a>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Projects */}
      <div className="flex flex-col justify-center items-center text-white mt-[2.5rem] w-full">
        <div
          id="Personal Projects"
          className="flex flex-col justify-start items-start w-full max-w-4xl"
        >
          <h2>Personal Projects</h2>
          <hr className="my-4 w-full border-1 border-white rounded-full" />
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0">
            <div className="flex flex-col justify-center items-center">
              <Card className="card w-full pt-2">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl">
                    Vortex
                  </CardTitle>
                </CardHeader>

                <CardContent className="">
                  <img
                    src="/GameImage.webp"
                    className="flex rounded-lg mx-auto h-auto w-3/4"
                  />
                  <p className="mt-4 indent-10 text-start">
                    An immersive storm chasing game on the online platform Roblox. Working with a multidisciplinary
                    team, I created and scaled a backend system utilizing a NoSQL, key-value database, along with
                    identifying and debugging critical issues to improve server performance.
                  </p>
                </CardContent>

                <CardFooter className="flex flex-row pt-0 pb-2">
                  <a
                    className="projectLink font-bold"
                    target="_blank"
                    href="https://roblox.com/games/17497598593/"
                  >
                    <i className="bi bi-box-arrow-up-right text-xl p-2"></i>
                    Game Link
                  </a>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
