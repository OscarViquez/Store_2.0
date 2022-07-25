import React from 'react'
// import '../../assets/images/promo-background.png'
import './promo-styles.css'

const Promo = () => {
    return (
        <>
            <section className='promo'>
                <div className='promo-content'>
                    <h2 className='promo__title'>
                        We have great products
                    </h2>
                    <p className='promo__copy'>
                    Join the OLIPOP Subscription Fam and never run out of OLIPOP, save money on every order. always receive free shipping, easily swap flavors via email.
                    </p>

                    <form className='promo-form'>
                        <input type="text" className='promo-input' placeholder='Enter email address here' />
                        <button type='submit' className='promo-submit' >
                            Sign Up
                        </button>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Promo