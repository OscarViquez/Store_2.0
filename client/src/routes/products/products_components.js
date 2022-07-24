// import React and React Hooks
// ============================================== // 
import React from 'react';
import { useState, useEffect } from 'react';

// import CSS / Styling
// ============================================== // 
import './products_styles.css'
// import { productsData } from '../../products';

// import Components 
// ============================================== // 
import { FilterAside } from '../../components/Filter-Aside/filter-aside-component';
import { Hero } from '../../components/Hero/Hero-component';
import ProductsList from '../../components/Products-list/products-list-components';
import SearchBox from '../../components/Search-box/search-box-component';
import Promo from '../../components/Promo-CTA/promo-component';
import { Footer } from '../footer/footer_component';



export const Products = () => {
  // ========================================================================================

  const [products, setAllProducts] = useState([])

  let fetchUrl = '/products';

  // ========================================================================================
  const displayProducts = async (url) => {
    try {
      const response = await fetch(`http://localhost:5500${url}`)
      const data = await response.json()
      setAllProducts(data)
    }

    catch (error) {
      console.log(error)
    }
  };

  // Fetching Data From DataBase using FETCH and PROMISES (async, await, try, catch)
  // ========================================================================================

  useEffect(() => {
    const displayProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5500${fetchUrl}`)
        const data = await response.json()
        setAllProducts(data)
      }

      catch (error) {
        console.log(error)
      }
    };
    displayProducts()

  }, [])

  // ========================================================================================

  function recommended() {
    fetchUrl = '/products'
    return displayProducts(fetchUrl)
  }

  function lowToHighPrices() {
    fetchUrl = '/products/filterBy=ASCPrice'
    return displayProducts(fetchUrl)
  }


  function highToLowPrices() {
    fetchUrl = '/products/filterBy=DESCPrice'
    return displayProducts(fetchUrl)
  }

  // Fetching Data From DataBase using FETCH and PROMISES (async, await, try, catch)
  // ========================================================================================
  return (
    <>
      {/* Hero Section /}
      {/* ============================================================================*/}
      <Hero classNameForBG={'hero hero-products'} title={'All Drinks'} />

      {/* Search Box Section /}
      {/* ============================================================================*/}
      <SearchBox className='search-box' // onChangeHandler={onSearchChange} 
        placeholder='Search Product Here' />
      {/* <button onClick={products}> Default  </button> */}
      <div>
        <div>
          <input name="filterBy" type="radio" className='button button--light' onClick={recommended} />
          <label htmlFor="Recommended">Recommended</label>
        </div>

        <div>
          <input name="filterBy"  type="radio" className='button button--light' onClick={lowToHighPrices} />
          <label htmlFor="Low To Highest Price">Lowest To Highest Price</label>
        </div>

        <div>
          <input name="filterBy"  type="radio" className='button button--light' onClick={highToLowPrices} />
          <label htmlFor="Highest To Lowest Price"> Highest To Lowest Price</label>
        </div>

      </div>



      {/* Main Products Section /}
      {/* ============================================================================*/}
      <main className='products-page-main'>
        <div className='products-page-main__wrapper'>
          {/* Products Filters Section Components*/}
          {/* ============================================================================*/}
          <section className='products-filters-section'>
            <FilterAside />
          </section>

          {/* Products Section Main Components*/}
          {/* ============================================================================*/}
          <section className='all-products-section'>
            <div className='all-products__wrapper'>
              <ProductsList content={products} />
            </div>
          </section>
        </div>
      </main>

      <Promo />
      <Footer />

    </>
  )
}
