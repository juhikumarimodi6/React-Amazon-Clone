import React, {useContext} from 'react'
import { useGlobalAppContext } from '../context/AppContext';
import './Product.css'

const Product = ({url, title, rating, price}) => {
  const {basketCount , setBasketCount} = useGlobalAppContext();
  const [quantityCount, setQuantityCount] = React.useState(0)

  const handleQuantityCount = () => {
    setQuantityCount(quantityCount + 1);
    setBasketCount(basketCount + 1);
  }

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