import React from 'react'
import { Link } from "react-router-dom";
import './navbar_styles.css'

export const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-wrapper'>
          <div className='navbar-logo'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png' alt='Store Logo' />
          </div>
          <ul className='navbar-list'>
            <li className='navbar-item'>
              <Link to='/'>Home</Link>
            </li>

            <li className='navbar-item'>
              <Link to='/about'>Our Story</Link>
            </li>

            <li className='navbar-item'>
              <Link to='/products'>Drinks</Link>
            </li>

            <li className="navbar-item cta-button">
              <Link to='/contact'>Contact Us</Link>
            </li>


            <li className="navbar-item cta-button">
              <a href='https://accounts.shopify.com/lookup?rid=90b315f6-1881-4e22-93f9-5ccf6b5054c4'>

                <i className="fa-solid fa-user"></i> Log In

              </a>
            </li>


            <li className="navbar-item cta-button">
              <Link to='/contact'><i className="fa-solid fa-bag-shopping"></i> Bag </Link>
            </li>

          </ul>
        </div>

      </nav>
    </>
  )
}
