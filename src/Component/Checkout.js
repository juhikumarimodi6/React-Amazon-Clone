import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'

const Checkout = () => {
  return (
    <div className='checkout-container'>
      <div className='left-container'>
        <p>Shopping Cart</p>
        <p>Price</p>
        <hr></hr>
        <CheckoutProduct />
      </div>
      <div className='right-container'>
      <p>Subtotal (3 items):
        <strong>₹{new Intl.NumberFormat('en-IN').format(1204)}</strong>
      </p>
        <input type='checkbox' />
            This order contains a gift
          <button className='checkout-proceed-to-buy-button'>Proceed to Buy</button>
      </div>
    </div>
  )
}

export default Checkout
