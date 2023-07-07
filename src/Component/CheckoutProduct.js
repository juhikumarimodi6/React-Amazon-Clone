import React from 'react'
import { JBL } from '../Assets/ItemImages/Index'
import './CheckoutProduct.css'
import AmazonFulfilled from '../Assets/Logo/amazon-fulfilled.png'

const CheckoutProduct = () => {
  return (
    <div className='checkout-product'>
        <div className="checkout-product-container">
            <img src={JBL} alt="JBL earpiece" />
            <div className="checkout-product-info">
                <div className="checkout-product-info-left">
                    <p className="checkout-product-title">
                        JBL Wave 200 TWS, True Wireless in-Ear Earbuds with Mic, 20 Hours Playtime, Deep Bass Sound, use Single Earbud or Both, Bluetooth 5.0, Type C & Voice Assistant Support for Mobile Phones (Blue)
                    </p>
                    <span className='amazon-color-success amazon-size-small'>In stock</span>
                    <span className='amazon-size-small amazon-color-secondary delivery-message'>Eligible for FREE Shipping</span>
                    <img src={AmazonFulfilled} alt="AmazonFulfilled" className='amazon-fulfilled' />
                    <label>
                        <input type='checkbox'/>
                        <span className='amazon-checkbox-label amazon-size-small'>This will be a gift</span>
                    </label>
                    <span className='amazon-size-small amazon-color-link'><a>Delete</a></span>
                </div>
                <div className="checkout-product-info-right">
                <p className="checkout-product-price">
                    <strong>₹{new Intl.NumberFormat('en-IN').format(120400)}</strong>
                </p>
                </div>
            </div>
        </div>
      <hr className='amazon-color-secondary'></hr>
    </div>
  )
}

export default CheckoutProduct
