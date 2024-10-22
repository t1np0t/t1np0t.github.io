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

                <div className='flex w-full px-4 justify-start'>
                    <p className='navbarText'>Darrion Nguyen</p>
                </div>

                <div className='flex w-full px-4 justify-end'>
                    <NavigationMenu>
                        <NavigationMenuList>

                            <NavigationMenuItem className='navbarLink'>
                                <a href='/'>Home</a>
                            </NavigationMenuItem>

                            <NavigationMenuItem className='navbarLink'>
                                <a href='/projects'>Projects</a>
                            </NavigationMenuItem>

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