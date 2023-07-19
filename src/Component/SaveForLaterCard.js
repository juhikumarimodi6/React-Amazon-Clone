import React from 'react'
import AmazonFulfilled from '../Assets/Logo/amazon-fulfilled.png'
import './SaveForLaterCard.css'
import { useGlobalAppContext } from '../context/AppContext'

const SaveForLaterCard = ({item}) => {
    const {id, image, price, title, quantity} = item;

    const {ContextDispatch} = useGlobalAppContext();

    const deleteItem = () => {
        ContextDispatch({
            type: 'DELETE_SAVEFORLATER_ITEM',
            payload: id,
        })
    }

    const moveToCart = () => {
        ContextDispatch({type: 'ADD_TO_CART',
                            payload: {...item},
                        });
        ContextDispatch({
            type: 'DELETE_SAVEFORLATER_ITEM',
            payload: id,
        })
        ContextDispatch({
            type: 'INCREASE_BASKETCOUNT',
            payload: quantity,
        })
    }

  return (
    <div className="saveForLater-product-container">
        <img src={image} alt="item" className='saveForLater-product-image'/>
        <p className="saveForLater-product-title">{title}</p>
        <strong>${new Intl.NumberFormat('en-IN').format(`${price}`)}</strong>
        <span className='amazon-color-success amazon-size-small'>In stock</span>
        <span className='amazon-size-small amazon-color-secondary delivery-message'>Eligible for FREE Shipping</span>
        <img src={AmazonFulfilled} alt="AmazonFulfilled" className='amazon-fulfilled' />
        <button className='move-to-cart' onClick={() => moveToCart()}>Move to cart</button>
        <a className='amazon-color-link amazon-size-small' onClick={() => deleteItem()} >Delete</a>
        <a className='amazon-color-link amazon-size-small' > Add to list </a>
        <a className='amazon-color-link amazon-size-small' > See more like this </a>
    </div>
  )
}

export default SaveForLaterCard
