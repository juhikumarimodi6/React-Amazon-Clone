import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'
import { useGlobalAppContext } from '../context/AppContext'
import Subtotal from './Subtotal'
import SaveForLater from './SaveForLater'

const Checkout = () => {
  const {ContextState} = useGlobalAppContext();

  return (
    <div className='checkout'>
    <div className='checkout-container'>
      <div className='left-container'>
      {ContextState.basketCount === 0 ? <h1 className='empty-cart-heading'>Shopping Cart is Empty</h1>: 
          <div>
            <h1>Shopping Cart</h1>
            <p className='align-right amazon-color-secondary'>Price</p>
            <hr></hr>
          </div>
      }
          <CheckoutProduct />
          <div className='checkout-subtotal'>
              <Subtotal />
          </div>
           </div>
      <div className='right-container'>
        <Subtotal />
        <input type='checkbox' />
            This order contains a gift
          <button className='checkout-proceed-to-buy-button'>Proceed to Buy</button>
      </div>
    </div>
    <SaveForLater />
    </div>
  )
}

export default Checkout
