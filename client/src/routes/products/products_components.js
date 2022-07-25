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
import { FilterAside } from '../../components/filterAside/filter-aside-component';
import { Hero } from '../../components/hero/Hero-component';
import ProductsList from '../../components/product-list/products-list-components';
import SearchBox from '../../components/search-box/search-box-component';
import Promo from '../../components/promo-section/promo-component';
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

  const recommended = () =>  {
    fetchUrl = '/products'
    return displayProducts(fetchUrl)
  }

  const lowToHighPrices = () =>  {
    fetchUrl = '/products/filterBy=ASCPrice'
    return displayProducts(fetchUrl)
  }

  const highToLowPrices = () =>  {
    fetchUrl = '/products/filterBy=DESCPrice' 
    return displayProducts(fetchUrl)
  }

  const filterByBrandOlipop = () => {
    fetchUrl = '/products/filterBy=Brand=olipop';
    return displayProducts(fetchUrl)
  }

  const filterByBrandTaika = () => {
    fetchUrl = '/products/filterBy=Brand=taika';
    return displayProducts(fetchUrl)
  }

  const filterByBrandCalpico = () => {
    fetchUrl = '/products/filterBy=Brand=calpico';
    return displayProducts(fetchUrl)
  }
  
  const filterByBrandLaCroix = () => {
    fetchUrl = '/products/filterBy=Brand=laCroix';
    return displayProducts(fetchUrl)
  }

  const filterByFlavorMilky = () => {
    fetchUrl = '/products/filterBy=Flavor=milky';
    return displayProducts(fetchUrl)
  }
  
  const filterByFlavorFruit = () => {
    fetchUrl = '/products/filterBy=Flavor=fruit';
    return displayProducts(fetchUrl)
  }

  const filterByFlavorCoffee = () => {
    fetchUrl = '/products/filterBy=Flavor=coffee';
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


      {/* Main Products Section /}
      {/* ============================================================================*/}
      <main className='products-page-main'>
        <div className='products-page-main__wrapper'>

          {/* Products Filters Section Components*/}
          {/* ============================================================================*/}
          <aside className='products-filters-section'>
            <FilterAside 
              filterByDefault={recommended}

              filterByBrands1={filterByBrandOlipop}
              filterByBrands2={filterByBrandTaika}
              filterByBrands3={filterByBrandCalpico}
              filterByBrands4={filterByBrandLaCroix}


              filterByPrice1={lowToHighPrices}
              filterByPrice2={highToLowPrices}

              filterByFlavor1={filterByFlavorMilky}
              filterByFlavor2={filterByFlavorFruit}
              filterByFlavor3={filterByFlavorCoffee}

            />
          </aside>

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
