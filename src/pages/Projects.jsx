import { ChevronRight } from 'lucide-react'
import '../components/css/App.css'
import { DefaultNavbar } from '../components/navbars'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Projects() {

  return (
    <>
      <title>Projects</title>
      < DefaultNavbar />

      <div className='flex flex-col justify-center items-center text-white' style={{ marginTop: '5rem'}}>
        <h1>Projects</h1>
        {/*<div className='card'>Project Title Goes Here</div>*/}

        <Card className='card text-white flex flex-col items-center'>
          <CardHeader>
            <CardTitle className='text-4xl tracking-wide'>
              Model Scheduler
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            s
          </CardContent>

          <CardFooter>
            <ChevronRight/>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}