// import React and React Hooks
// ============================================== // 
import React from 'react'
import { useState, useEffect } from 'react'

// import Components 
// ============================================== // 
import { FilterAside } from '../../components/Filter-Aside/filter-aside-component'
import { Hero } from '../../components/Hero/Hero-component'
import ProductsList from '../../components/Products-list/products-list-components'
import SearchBox from '../../components/Search-box/search-box-component'

// import CSS / Styling
// ============================================== // 
import './products_styles.css'

export const Products = () => {
  const [products, setAllProducts] = useState([])
  // const [orderByAZ, setOrderByAZ] = useState([]);
  // const [orderByNum, setOrderByNum] = useState([]);

  // Fetching Data From DataBase using FETCH and PROMISES (async, await, try, catch)
  // ========================================================================================
  useEffect(() => {
    const displayProducts = async () => {
      try {
        const response = await fetch('http://localhost:5500/products')
        const data = await response.json()
        setAllProducts(data)
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
      <Hero classNameForBG={'hero hero-products'} />

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

    </>
  )
}