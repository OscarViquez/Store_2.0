import React from 'react'
import { Footer } from '../footer/footer_component'
import Promo from '../../components/Promo-CTA/promo-component'
import './contact_styles.css'

export const Contact = () => {
  return (
    <div>
      {/* <img src='images/image-1.png' alt='something'/> */}
      <div className='promo-cta-wrapper'>
        <Promo />
        <Footer />
      </div>
    </div>
  )
}
