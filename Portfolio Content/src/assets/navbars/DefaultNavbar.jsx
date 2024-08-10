import { useState } from 'react'
import reactLogo from '../../assets/images/react.svg'
import '../css/Navbar.css'

export default function DefaultNavbar() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div class='fixed-top' style={{ width: '100%' }}>
                <nav class='navbar navbar-dark bg-dark' style={{ height: '4.5rem' }}>
                    <div class='px-4 align-items-center'>
                        <a class='navbar-brand'>Darrion Nguyen</a>
                    </div>

                    <div class="px-4 flex-row justify-content-end align-items-center">
                        <a class="navbarLink text-decoration-none ms-4 me-2" href="/">Home</a>
                        <a class="navbarLink text-decoration-none ms-4 me-2" href="/projects">Projects</a>
                        <a class="navbarLink text-decoration-none ms-4 me-2" href="/cs-i">CS-I</a>
                        <a class="navbarLink text-decoration-none ms-4 me-2" href="/cs-ii">CS-II</a>
                    </div>
                </nav>
            </div>
        </>
    )
}
