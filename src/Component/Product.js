import React from 'react'
import './Product.css'

const Product = ({url, title, rating, price}) => {
  return (
    <div className='product'>
        <img src={url} alt="phone" className="product-image" />
        <div className='product-info'>
            <p className='product-title'>{title}</p>
            <div className="product-rating">
                <p className='starall'></p>
            </div>
            <p className="product-price">
                <sup><small>₹</small></sup>
                <strong>{new Intl.NumberFormat('en-IN').format(price)}</strong>
            </p>
        </div>
        <button>Add to basket</button>
    </div>
  )
}

export default Product
