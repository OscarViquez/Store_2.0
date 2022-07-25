import React from 'react'

// =========================================
import imageOfDrinkBoxes from '../../assets/images/home-section-box.svg'
import imageOfWaterlooDrink from '../../assets/images/home-section-waterloo.svg'

// =========================================

import { Header } from '../../components/header/Header-component'
import { Section } from '../../components/section/section-component'
import Promo from '../../components/promo-section/promo-component';
import { Footer } from '../footer/footer_component';

// =========================================

import './home_styles.css'

export const Home = () => {

  const headerData = {
    title: ' shop to buy online exclusive drinks',
    hightlight: 'One-stop',
    subtitle: "Were Blume. We're all up in your bathroom with products that are good for your body and the environment."
  }

  const sectionOneData = {
    classNameForBG: 'section-blocks section-blocks--orange-gradient',
    classNameForLayout: 'section-wrapper',
    title: 'We have great ',
    hightlight: 'products',
    description: "Join the OLIPOP Subscription Fam and never run out of OLIPOP, save money on every order, always receive free shipping, easily swap flavors via text, and get help when you need it with our dedicated VIP concierge.",
    image: imageOfDrinkBoxes,
    image_alt: 'Image of amazing drinks being packed in to a large box'
  }

  const sectionTwoData = {
    classNameForBG: 'section-blocks section-blocks--dark-orange-gradient',
    classNameForLayout: 'section-wrapper section-wrapper--reverse',
    title: 'We have great ',
    hightlight: 'products',
    description: "Join the OLIPOP Subscription Fam and never run out of OLIPOP, save money on every order, always receive free shipping, easily swap flavors via text, and get help when you need it with our dedicated VIP concierge.",
    image: imageOfWaterlooDrink,
    image_alt: 'Image of amazing drinks being packed in to a large box'
  }

  return (
    <>
      <Header content={headerData} />
      <Section sectionContent={sectionOneData} />
      <Section sectionContent={sectionTwoData} />
      <Promo />
      <Footer />
    </>
  )
  
}
