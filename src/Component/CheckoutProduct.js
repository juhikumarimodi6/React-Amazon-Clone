import React from 'react'
import { JBL } from '../Assets/ItemImages/Index'

const CheckoutProduct = () => {
  return (
    <div className='checkout-product'>
        <img src={JBL} alt="JBL earpiece" />
        <div className="checkout-product-info">
            <div className="checkout-product-info-left">
                <p className="checkout-product-title">
                    JBL Wave 200 TWS, True Wireless in-Ear Earbuds with Mic, 20 Hours Playtime, Deep Bass Sound, use Single Earbud or Both, Bluetooth 5.0, Type C & Voice Assistant Support for Mobile Phones (Blue)
                </p>
            </div>
            <div className="checkout-product-info-right">
            <p className="checkout-product-price">
                <strong>₹{new Intl.NumberFormat('en-IN').format(1204)}</strong>
            </p>
            </div>
        </div>
      
    </div>
  )
}

export default CheckoutProduct
