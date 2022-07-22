// import React and React Hooks
// ============================================== // 
import React from 'react';
import { useState, useEffect } from 'react';
import './products_styles.css'


import { productsData } from '../../products';
// import Components 
// ============================================== // 
import { FilterAside } from '../../components/Filter-Aside/filter-aside-component';
import { Hero } from '../../components/Hero/Hero-component';
import ProductsList from '../../components/Products-list/products-list-components';
import SearchBox from '../../components/Search-box/search-box-component';
import Promo from '../../components/Promo-CTA/promo-component';
import { Footer } from '../footer/footer_component';

// import CSS / Styling
// ============================================== // 

export const Products = () => {
  const [products, setAllProducts] = useState([])
  const [orderByAZ, setOrderByAZ] = useState(products);
  const [orderByNum, setOrderByNum] = useState(products);

  // Fetching Data From DataBase using FETCH and PROMISES (async, await, try, catch)
  // ========================================================================================
  useEffect(() => {
    const displayProducts = async () => {
      try {
        // const response = await fetch(productsData)
        // const data = await response.json()
        setAllProducts(productsData)
      }

      catch (error) {
        console.log(error)
      }
    };
    displayProducts()
  }, [])

  // Function that, when triggered, will order the Products from A-Z (Alphabetical Order)
  // ========================================================================================
  // function byAlphabetOrder() {
  //   const byAlphabetical = products.sort((a, b) => {
  //     console.log(a.name.localeCompare(b.name))
  //     return a.name.localeCompare(b.name)
  //   })

  //   setOrderByAZ(byAlphabetical)
  //   console.log(orderByAZ)

  // }


  // function byLowtoHigh() {
  //   const sortByLowtoHigh = products.sort((a, b) => {
  //     console.log(a.name.localeCompare(a.price - b.price))
  //     return a.price - b.price
  //   })

  //   setOrderByNum(sortByLowtoHigh)
  // }

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
