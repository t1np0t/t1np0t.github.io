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
      >
        <div className="flex flex-col justify-center items-center mt-16">
          <button className="rounded-md border border-white px-4">
            <motion.a
              className="flex flex-row space-x-2 justify-center items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document
                  .getElementById("Projects")
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

      {/* Projects */}
      <div className="flex flex-col justify-center items-center text-white mb-32 mt-[15rem] w-full">
        <div id="Projects" className="flex flex-col justify-start items-start w-full max-w-4xl">
          <h2>Projects</h2>
          <hr className="my-4 w-full border-1 border-white rounded-full" />
          <div className="flex flex-col space-y-8 lg:space-x-24 lg:flex-row lg:space-y-0">
            <div className="flex flex-col justify-center items-center space-x-8">
              <Card className="card w-full">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-4xl tracking-wide">
                    Model Scheduler
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <img src="/ModelScheduler.png" className="flex rounded-lg" />
                  <p className="mt-4 indent-10 text-start">
                    The Model Scheduler is a tool created by students in the
                    Computer Science II and Computer Science III classes each
                    year at Allen High School. This tool helps students at Allen
                    High School to create their schedule for the next school
                    year by providing students with the course availability and
                    information, letting them build their own schedules based
                    off of the given data. This was the first project where I
                    learned how to work with frameworks, specifically React,
                    along with working together as a team.
                  </p>
                </CardContent>

                <CardFooter>
                  <a
                    className="projectLink"
                    target="_blank"
                    href="https://github.com/Allen-ISD-Computer-Science/REPO_ModelScheduler_2024"
                  >
                    View Github Repository
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
