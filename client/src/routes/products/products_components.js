import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../../components/card'
import './products_styles.css'

export const Products = () => {
  const [products, setAllProducts] = useState([])
  const [intitalProducts, setInitalProducts] = useState([])


  const [orderByAZ, setOrderByAZ] = useState([]);
  const [orderByNum, setOrderByNum] = useState([]);

  // Fetching Data From DataBase using FETCH and PROMISES (async, await, try, catch)
  // ========================================================================================
  useEffect(() => {
    const displayProducts = async () => {
      try {
        const response = await fetch('http://localhost:5500/products')
        const data = await response.json()
        setAllProducts(data)
        console.log(setAllProducts(data))
      }
      catch (error) {
        console.log(error)
      }
    };
    displayProducts()


  }, [])


  // Function that, when triggered, will order the Products from A-Z (Alphabetical Order)
  // ========================================================================================
  function byAlphabetOrder() {
    const byAlphabetical = products.sort((a, b) => {
      console.log(a.name.localeCompare(b.name))
      return a.name.localeCompare(b.name)
    })

    setOrderByAZ(byAlphabetical)
  }

  function byLowtoHigh() {
    const sortByLowtoHigh = products.sort((a, b) => {
      console.log(a.name.localeCompare(a.price - b.price))
      return a.price - b.price
    })

    setOrderByNum(sortByLowtoHigh)
  }

  // Fetching Data From DataBase using FETCH and PROMISES (async, await, try, catch)
  // ========================================================================================
  return (
    <div className='container'>
      <h1>All Products Here</h1>

      {/* Radio Buttons */}
      {/* ============================================================================*/}
      <form>
        <div>
          <label htmlFor="question-1-A">Order Alphabetically</label>
          <input name="question-1-A"
            className='input-alpha'
            type='radio'
            onChange={byLowtoHigh}
             />
        </div>

        <div>
          <label htmlFor="question-1-A">Order Alphabetically</label>
          <input name="question-1-A"
            className='input-alpha'
            type='radio'
            onChange={byAlphabetOrder} />
        </div>
      </form>


      {/* Card Components*/}
      {/* ============================================================================*/}
      <div className='card-container'>
        {products.map((product, key) => {
          return (
            <Card
              image_md={product.image_md}
              name={product.name}
              desc_card_simple={product.desc_card_simple}
              price={product.price}
              key={key}
            />
          )
        })

        }

      </div>
    </div>
  )
}
