import { useGlobalAppContext } from '../context/AppContext';
import './Product.css'

const Product = ({id, url, title, rating, price}) => {
  const {ContextState, ContextDispatch} = useGlobalAppContext();
  const addToBasket = () => {
                  ContextDispatch({type: 'ADD_TO_CART',
                                    payload: {
                                        id: id,
                                        image: url,
                                        title: title,
                                        price: price,
                                        quantity: 1,
                                      }});
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
        <button className='product-add-to-basket-button' onClick={addToBasket}>Add to Cart</button>
    </div>
  )
}

export default Product