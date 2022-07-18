import React from 'react'

const Card = (props) => {
  return (
    
    <div className='card__wrapper'>

        <img src={props.image_md} alt='#'/>
        <h2>{props.name}</h2>
        <p>{props.desc_card_simple}</p>
        <span>{props.price}</span>

    </div>

  )
}

export default Card