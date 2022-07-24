import React from 'react';
import './section-styles.css';


export const Section = (props) => {

  const { classNameForBG, classNameForLayout, title, hightlight, description, image, image_alt } = props.sectionContent

  return (
    <>
      <section className={classNameForBG}>
        <div className={classNameForLayout}>

          <div className='section-copy-wrapper'>

            <h2 className='section-copy__title'>
              {title}
              <span className='section-copy__title--highlight' >
                {hightlight}
              </span>
            </h2>

            <p className='section-copy__description'>
              {description}
            </p>

            <a className='button button--dark'>
              Shop Now
            </a>

          </div>

          <div className='section-image-wrapper'>
            <img src={image} alt={image_alt} />
          </div>

        </div>
      </section>
    </>
  )
};
