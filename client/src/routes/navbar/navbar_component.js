import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import './navbar_styles.css'

export const Navbar = () => {

  const [toggleVisibility, setToggleVisibility] = useState(true)

  const toggleMenu = () => {
    toggleVisibility ?  setToggleVisibility(false) : setToggleVisibility(true)
    console.log('inside toggle', toggleVisibility)
  }

  return (
    <>
      <nav className={toggleVisibility ? 'navbar ' : 'navbar navbar-background-overlay'}>
        <div className='navbar-wrapper'>
          <div className='navbar-logo'>
            <img src='images/store-logo.png' alt='Store Logo' />
            <button className='navbar-toggle' onClick={toggleMenu}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          <ul className={toggleVisibility ? 'navbar-list navbar-display-none' : 'navbar-list'}>
            <li className='navbar-item'>
              <Link to='/'>Home</Link>
            </li>

            {/* <li className='navbar-item'>
              <Link to='/about'>Our Story</Link>
            </li> */}

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
