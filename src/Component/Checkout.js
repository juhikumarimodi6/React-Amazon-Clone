import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'

const Checkout = () => {
  return (
    <div className='checkout'>
    <div className='checkout-container'>
      <div className='left-container'>
        <h1>Shopping Cart</h1>
        <p className='align-right amazon-color-secondary'>Price</p>
        <hr></hr>
        <CheckoutProduct />
        {/* <CheckoutProduct /> */}
      </div>
      <div className='right-container'>
      <p>Subtotal (3 items):
        <strong>₹{new Intl.NumberFormat('en-IN').format(120400)}</strong>
      </p>
        <input type='checkbox' />
            This order contains a gift
          <button className='checkout-proceed-to-buy-button'>Proceed to Buy</button>
      </div>
    </div>
    </div>
  )
}

export default Checkout
