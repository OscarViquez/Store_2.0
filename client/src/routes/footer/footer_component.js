import React from 'react'
import { Link } from "react-router-dom";
import './footer_styles.css'

export const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer-wrapper'>
                    <div className='footer-box'>
                        <img  className='footer-logo' src='/images/store-logo.png'/>
                        <p className='footer-box__description'>
                            Join the OLIPOP Subscription Fam and never run out of OLIPOP, save money on every order. easily swap flavors via text, and get help when you need it with our dedicated VIP concierge.
                        </p>
                    </div>

                    <div className='footer-box'>
                        <h3 className='footer-box__title'>Pages</h3>
                        <ul className='footer-list'>
                            <li className='footer-item'>
                                <Link to='/'>Our Story</Link>
                            </li>
                            <li className='footer-item'>
                                <Link to='/'>Collections</Link>
                            </li>
                            <li className='footer-item'>
                                <Link to='/'>Drinks</Link>
                            </li>
                            <li className='footer-item'>
                                <Link to='/'>Contact us</Link>
                            </li>
                            <li className='footer-item'>
                                <Link to='/'>Locations</Link>
                            </li>
                            <li className='footer-item'>
                                <Link to='/'>FAQ</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='footer-box'>
                        <h3 className='footer-box__title'>Contact information</h3>
                        <ul className='footer-list'>
                            <li className='footer-item'>
                                2123 Address Place St. Atlanta, GA
                            </li>
                            <li className='footer-item'>
                                Company@business.com
                            </li>
                            <li className='footer-item'>
                                700-291-3021
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
