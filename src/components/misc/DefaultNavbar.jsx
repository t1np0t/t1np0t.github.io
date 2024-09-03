import '../css/Navbar.css'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"

export default function DefaultNavbar() {
    return (
        <>
            <div className='fixed top-0 left-0 w-full flex justify-center items-center' style={{ zIndex: 10, backgroundColor: '#1c1c1c', height: '4rem' }}>

                <div className='flex w-full px-4 justify-start'>
                    <p className='navbarText'>Darrion Nguyen</p>
                </div>

                <div className='flex w-full px-4 justify-end'>
                    <NavigationMenu>
                        <NavigationMenuList>

                            <NavigationMenuItem>
                                <a class='navbarLink ms-4 me-2' href='/'>Home</a>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <a class='navbarLink ms-4 me-2' href='/projects'>Projects</a>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <a class='navbarLink ms-4 me-2 text-center' href='/cs-classes'>CS Classes</a>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </>
    )
}