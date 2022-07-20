import React from 'react'
import CardProductsFull from '../../components/Card-Product-Full/Card-Products-Full-component'

const ProductsList = (props) => {

    const products = props.content;

    return (
        <>
            {/* Card Components*/}
            {/* ============================================================================*/}
            {products.map((product, key) => {
                return (
                    <CardProductsFull
                        content={product}
                        key={key}
                    />
                )
            })}
        </>
    )
}

export default ProductsList