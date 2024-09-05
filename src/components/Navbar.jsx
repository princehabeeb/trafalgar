import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <img src="/images/logo.png" alt="" />
        <ul>
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