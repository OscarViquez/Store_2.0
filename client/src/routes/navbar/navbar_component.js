import React from 'react'
import { Link } from "react-router-dom";
import './navbar_styles.css'

export const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/about'>About</Link>
          </li>

          <li>
            <Link to='/products'>Products</Link>
          </li>

          <li className="cta-button">
            <Link to='/contact'>Contact Us</Link>
          </li>

        </ul>
      </nav>
    </div>
  )
}
