import React from 'react'
import CardProductsFull from '../../components/cardProductFull/Card-Products-Full-component'

const ProductsList = (props) => {

    const products = props.content;

    return (
        <>
            {/* Card Components*/}
            {/* ============================================================================*/}
            {products.map((product) => {
                return (
                    <CardProductsFull
                        content={product}
                        key={product.product_id}
                    />
                )
            })}
        </>
    )
}

export default ProductsList