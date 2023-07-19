import { useGlobalAppContext } from '../context/AppContext';
import './Product.css'

const Product = ({id, url, title, rating, price}) => {
  const {ContextDispatch} = useGlobalAppContext();
  const addToBasket = () => {
                  ContextDispatch({type: 'ADD_TO_CART',
                                    payload: {
                                        id: id,
                                        image: url,
                                        title: title,
                                        price: price,
                                        quantity: 1,
                                        rating: rating,
                                      }});
  }

  const rateMapValue = (rating) => {
    const dec = rating % 1;
    const num = Math.floor(rating / 1);

    if(dec <= 0.25) {
      return ratePosMap[num];
    } else if (dec > 0.25 && dec <= 0.75) {
      return ratePosMap[num + 0.5];
    } else {
      return ratePosMap[num + 1];
    }
  }

  const ratePosMap = {
      '5': '-2px', 
      '4': '-42px', '4.5': '-82px', 
      '3': '-122px', '3.5': '-162px', 
      '2': '-202px', '2.5': '-242px', 
      '1': '-282px', '1.5': '-322px',
      '0': '-362px', '0.5': '-402px',
  }

  return (
    <div className='product'>
        <img src={url} alt="phone" className="product-image" />
        <div className='product-info'>
            <p className='product-title'>{title}</p>
            <div className="product-rating">
              {/* {console.log("rating" + rating + "and" +  "ratemap" + rateMapValue(rating))} */}
                <p className='starall' style={{backgroundPositionY: `${rateMapValue(rating)}`}}></p> 
            </div>
            <p className="product-price">
                <sup><small>$</small></sup>
                <strong>{new Intl.NumberFormat('en-IN').format(price)}</strong>
            </p>
        </div>
        <button className='product-add-to-basket-button' onClick={addToBasket}>Add to Cart</button>
    </div>
  )
}

export default Product