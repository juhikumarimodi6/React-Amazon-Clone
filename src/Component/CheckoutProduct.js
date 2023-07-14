import React from 'react'
import './CheckoutProduct.css'
import AmazonFulfilled from '../Assets/Logo/amazon-fulfilled.png'
import { useGlobalAppContext } from '../context/AppContext'

const CheckoutProduct = () => {
    const {ContextState, ContextDispatch} = useGlobalAppContext();
    console.log(ContextState.basket);
    const deleteFromCart = (id) => {
        ContextDispatch({type: 'DELETE_FROM_CART',
                            payload: id,
                         })
    }
  return (
    <div className='checkout-product'>
        {ContextState.basket.map((item) => {
            return (
                <div>
                <div className="checkout-product-container">
                    <img src={item.image} alt="JBL earpiece" />
                    <div className="checkout-product-info">
                        <div className="checkout-product-info-left">
                            <p className="checkout-product-title">
                               {item.title}
                            </p>
                            <span className='amazon-color-success amazon-size-small'>In stock</span>
                            <span className='amazon-size-small amazon-color-secondary delivery-message'>Eligible for FREE Shipping</span>
                            <img src={AmazonFulfilled} alt="AmazonFulfilled" className='amazon-fulfilled' />
                            <label>
                                <input type='checkbox'/>
                                <span className='amazon-checkbox-label amazon-size-small'>This will be a gift</span>
                            </label>
                            <div className='checkout-product-quantity-container'>
                                <div className='checkout-product-quantity'>
                                    Qty:{item.quantity}
                                </div>
                                <span className='amazon-size-small amazon-color-link '>
                                    <a className='left-right-border' onClick={() => deleteFromCart(item.id)}>Delete</a>
                                    <a className='left-right-border' > Save for later </a>
                                    <a className='left-right-border' > See more like this </a>
                                    <a className='left-right-border' > Share </a>
                                </span>
                            </div>
                        </div>
                        <div className="checkout-product-info-right">
                        <p className="checkout-product-price">
                            <strong>₹{new Intl.NumberFormat('en-IN').format(`${item.price}`)}</strong>
                        </p>
                        </div>
                    </div>
                </div>
                 <hr className='amazon-color-secondary'></hr>
                </div>
             )})}
    </div>
  )
}

export default CheckoutProduct
