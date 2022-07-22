import React from 'react'
import './Hero-styles.css'

export const Hero = (props) => {
    
    return (
        <>
            <header className={props.classNameForBG}>
                <div className='hero-content'>
                    <h1 className='hero__title'>{props.title}</h1>
                </div>
            </header>
        </>
    )
}
