import React from 'react'

const CardProductsSimple = (props) => {
  
    const { image_md, name, desc_card_simple , price} = props.content;
    return ( 
      <div>
          <img src={image_md} alt='#'/>
          <h2>{name}</h2>
          <p>{desc_card_simple}</p>
          <span>{price}</span>
      </div>
  
    )
  }
  
  export default CardProductsSimple
