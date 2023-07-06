import React from 'react'
import Button from './Button'
import './Checkout.css'

const Checkout = () => {
  return (
    <div className='checkout-container'>
      <div className='left-container'>
        <p>This is left container</p>
      </div>
      <div className='right-container'>
        <p>Subtotal (3 items):<strong>1,204.00</strong> </p>
        <input type='radio' />
            This order contains a gift
        <div>
            <Button
                title = {"Proceed to Buy"}
            />
        </div>
      </div>
    </div>
  )
}

export default Checkout
