import React from 'react'
import './filter-aside-styles.css'

export const FilterAside = (props) => {

    return (
        <>
            <div className='products-filter'>
                <h2>Filter By Brands</h2>
                <div className='products-filter-radios'>
                    <input name="filterBy" type="radio" className='button button--light' onClick={props.filterByDefault} />
                    <label htmlFor="Recommended">Recommended</label>
                </div>

                <div className='products-filter-radios'>
                    <input name="filterBy" type="radio" className='button button--light' onClick={props.filterByBrands1} />
                    <label htmlFor="Low To Highest Price">Olipop</label>
                </div>

                <div className='products-filter-radios'>
                    <input name="filterBy" type="radio" className='button button--light' onClick={props.filterByBrands2} />
                    <label htmlFor="Highest To Lowest Price">Taika</label>
                </div>
                
                <div className='products-filter-radios'>
                    <input name="filterBy" type="radio" className='button button--light' onClick={props.filterByBrands3} />
                    <label htmlFor="Highest To Lowest Price">Calpico</label>
                </div>

                <div className='products-filter-radios'>
                    <input name="filterBy" type="radio" className='button button--light' onClick={props.filterByBrands4} />
                    <label htmlFor="Highest To Lowest Price">La Croix</label>
                </div>
            </div>

            <div className='products-filter'>
                <h2>Filter By Price</h2>
                <div className='products-filter-radios'>
                    <input name="filterBy" type="radio" className='button button--light' onClick={props.filterByPrice1} />
                    <label htmlFor="Low To Highest Price">Lowest To Highest</label>
                </div>

                <div className='products-filter-radios'>
                    <input name="filterBy" type="radio" className='button button--light' onClick={props.filterByPrice2} />
                    <label htmlFor="Highest To Lowest Price">Highest To Lowest</label>
                </div>
            </div>

            <div className='products-filter'>
                <h2>Filter By Flavor</h2>
                <div className='products-filter-radios'>
                <input name="filterBy" type="radio" className='button button--light' onClick={props.filterByFlavor1} />
                    <label htmlFor="Low To Highest Price">Milky</label>
                </div>

                <div className='products-filter-radios'>
                    <input name="filterBy" type="radio" className='button button--light' onClick={props.filterByFlavor2} />
                    <label htmlFor="Low To Highest Price">Fruity</label>
                </div>

                <div className='products-filter-radios'>
                    <input name="filterBy" type="radio" className='button button--light' onClick={props.filterByFlavor3} />
                    <label htmlFor="Highest To Lowest Price">Coffee</label>
                </div>
            </div>
        </>
    )
}
