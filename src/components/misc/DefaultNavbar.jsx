import '../css/Navbar.css'
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
            <div className='fixed top-0 left-0 w-full flex justify-center items-center' style={{ zIndex: 10, backgroundColor: '#333333', height: '4rem' }}>

                <div className='lg:fixed flex left-0 justify-center items-center'>
                    <p className='navbarText lg:w-full lg:ml-4 w-[25%] -ml-12'>Darrion Nguyen</p>
                </div>

                <div className='flex flex-grow justify-center items-center'>
                    <NavigationMenu>
                        <NavigationMenuList className='space-x-4'>

                            <NavigationMenuItem className='navbarLink'>
                                <a href='/'>Home</a>
                            </NavigationMenuItem>

                            <div className='border border-white h-[2.5vh]'/>

                            <NavigationMenuItem className='navbarLink'>
                                <a href='/projects'>Projects</a>
                            </NavigationMenuItem>

                            <div className='border border-white h-[2.5vh]'/>

                            <NavigationMenuItem className='navbarLink'>
                                <a className='flex text-center' href='/cs-classes'>CS Classes</a>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </>
    )
}