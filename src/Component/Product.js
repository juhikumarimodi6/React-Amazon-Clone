import React from 'react'
import './Product.css'
import Button from './Button'

const Product = ({url, title, rating, price, basketCount, setBasketCount}) => {
  const [quantityCount, setQuantityCount] = React.useState(0)
  const handleQuantityCount = () => {
    setQuantityCount(quantityCount + 1);
    setBasketCount(basketCount + 1);
  }
  console.log(basketCount)
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
        <button className='product-add-to-basket-button' onClick={handleQuantityCount}>Add to Cart</button>
    </div>
  )
}

export default Product
