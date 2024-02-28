import React, { Fragment } from 'react'
import AddToCart from './AddToCart'

const ProductCard = () => {
    return (
        <Fragment>
            <h2 className='mt-4'>Product Card</h2>
            <AddToCart />
        </Fragment>
    )
}

export default ProductCard