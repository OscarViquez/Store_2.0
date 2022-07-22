import React from 'react'
import '../Card-Product-Full/Card-Product-Full-styles.css'

const CardProductsFull = (props) => {

  const { image_sm, name, desc_card_simple, price } = props.content;

  return (
    <>
      <figure className='product-card-full'>
        <img src={image_sm} alt={desc_card_simple} />
        <div className='product-card-full-info'>
          <h2 className='product-card-full__name'>{name}</h2>
          <p className='product-card-full__desc-simple'>{desc_card_simple}</p>
          <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </span>
          <p className='product-card-full__price'>${price}</p>
        </div>
        <button className="product-card-full-cart">
          Add To Cart <i className="fa-solid fa-circle-plus"></i>
        </button>
      </figure>
    </>

  )
}

export default CardProductsFull