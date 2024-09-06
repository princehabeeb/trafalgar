import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    const [menu, setMenu]  = useState(true);


    const showMenu = () => {
        setMenu(!menu);
    }

    
  return (
    <nav>
        <img src="/images/logo.png" alt="" />

        <div className='menu' onClick={showMenu}><GiHamburgerMenu /></div>
        <ul className={menu? '': 'show'}>
            <li>
                <Link>Home</Link>
            </li>
            <li>
                <Link>Find a Doctor</Link>
            </li>
            <li>
                <Link>Apps</Link>
            </li>
            <li>
                <Link>Testimonials</Link>
            </li>
            <li>
                <Link>About Us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar