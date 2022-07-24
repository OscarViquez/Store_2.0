import React from 'react'
import './Header-styles.css'

export const Header = (props) => {

  const { title, hightlight, subtitle } = props.content;

  return (
    <>
      <section className='header'>
        <div className='header-content'>
          <h1 className='header__title'>

            <span className='header__title--highlight' >
              {hightlight}
            </span>
            
            {title}
          </h1>

          <p className='header__subtitle'>
            {subtitle}
          </p>

          <div className='header-buttons'>
            <a className='button button--light'>
              Shop Now
            </a>
            <a className='button button--dark'>
              Shop Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
