import '../components/css/App.css'
import { DefaultNavbar } from '../components/navbars'

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { language: "HTML/CSS", desktop: 3, mobile: 3 },
  { language: "Java", desktop: 1, mobile: 1 },
  { language: "Javascript", desktop: 2, mobile: 2 },
  { language: "Lua", desktop: 4, mobile: 4 },
  { language: "Python", desktop: 3, mobile: 3 },
  { language: "Swift", desktop: 2, mobile: 2 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
};


export default function Home() {

  return (
    <>
      <title>Digital Portfolio</title>

      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>

      {/* Introduction */}

      < DefaultNavbar />
      <div className='flex flex-col justify-center items-center text-white' style={{ marginTop: '2.5rem', marginBottom: '12.5rem'}}>
        <div className='flex flex-col justify-center items-center' style={{width: '90vw', height: '50vh'}}>
          <div className='flex flex-col space-y-8 items-center'>
            <h2>Welcome to my Digital Portfolio!</h2>
            <div className='text-wrap' style={{ width: '50vh' }}><h3>I am a student at Allen High School, who plans to major in Computer Science.</h3></div>
          </div>
        </div>
      </div>

      {/* Experience */}

      <div className='flex flex-col justify-center items-center text-white mb-64'>
        <div className='flex flex-col justify-center items-center' style={{ width: '100vw', height: '20vh' }}>
          <h1>Experience</h1>
          <div className='flex flex-row space-x-24 justify-center'>

            <Card>
              <CardHeader>
                <CardTitle>Years of Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} style={{ width: '35vw' }}>
                  <BarChart
                    data={chartData}
                    layout="vertical"
                    margin={{ right: 16 }}
                  >
                    <CartesianGrid horizontal={false} vertical={false} />
                    <YAxis
                      dataKey="language"
                      type="category"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => value.slice(0, 3)}
                      hide
                    />
                    <XAxis dataKey="desktop" type="number" hide />
                    <Bar
                      dataKey="desktop"
                      layout="vertical"
                      fill="var(--color-desktop)"
                      radius={4}
                    >
                      <LabelList
                        dataKey="language"
                        position="insideLeft"
                        offset={8}
                        className="fill-[--color-label]"
                        fontSize={20}
                      />
                      <LabelList
                        dataKey="desktop"
                        position="right"
                        offset={8}
                        className="fill-background"
                        fontSize={20}
                      />
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <div className='rounded-lg text-white border border-2 text-start p-4 indent-10' style={{backgroundColor: '#252525', width: '35%'}}>
              <p className='mb-3'>
                The first programming language I learned was Lua in mid-2020. I learned the fundamentals of programming, including variables, functions, conditionals, and loops.
              Computer Science I was my first class into the field of computer science, which I took in my sophomore year. In this class, I was introduced to the basics of using the shell. The shell, as known as the terminal, is a way to interact with the computer's operating system.
              On top of that, I was also introduced to Swift, the basics of computer architecture, and began my digital portfolio using just Hypertext Markup Langauge (HTML) and Cascading Style Sheets (CSS).
              </p>
              <p>
                My Computer Science II course in my junior year focused more on sorting algorithms and independent study projects (ISPs), along with researchiang about technological conspiracy theories.
                The ISP I created for this class was the Model Scheduler for Allen High School, which allowed students to prepare creating their schedules for the next school year.
              </p>
              </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}

      <div className='flex flex-col py-12 bg-zinc-900 rounded-lg justify-center items-center w-screen text-white absolute left-0'>
            <div className='flex flex-row justify-center items-center space-x-24 rounded-lg'>

            <a href="https://github.com/darrnguyen" target="_blank" className="infoCard -space-y-2" style={{backgroundColor: '#333333'}}>
                <i className="bi bi-github"></i>
                <div>Github</div>
              </a>

              <a href="/Resume.png" target="_blank" className="infoCard bg-sky-800 -space-y-2">
                <i className="bi bi-person-lines-fill"></i>
                <div>Resume</div>
              </a>

              <a href="https://www.linkedin.com/in/darrion-nguyen-a58b5727a/" target="_blank" className="infoCard -space-y-2" style={{backgroundColor: '#0077B5'}}>
                <i className="bi bi-linkedin"></i>
                <div>Linkedin</div>
              </a>

            </div>
            <a className='flex pt-4 docs text-lg' href='https://github.com/darrnguyen/darrnguyen.github.io' target='_blank'>This portfolio lives here</a>
          </div>
    </>
  )
}
