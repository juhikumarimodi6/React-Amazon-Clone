import { useGlobalAppContext } from '../context/AppContext';
import Product from './Product';

const ProductFilter = () => {
    const {ContextState} = useGlobalAppContext();
    const {searchInput} = ContextState;

    const keys = ['title', 'description', 'category'];
    const search = (data) => {
        const fiteredProduct = (data.filter(user=> keys.some((key) => user[key].toLowerCase().includes(searchInput.toLowerCase()))));
        return fiteredProduct;
    }

  return (
    <div className='product-container'>
        {ContextState.products && ContextState.searchInput && search(ContextState.products).map((item) => {
            const {category, description, id, image, price, rating, title } = item;
            return <div className='product-home'>
                        <Product
                            key = {id}
                            id = {id}
                            url = {image}
                            title = {title}
                            rating = {rating.rate}
                            price = {price}
                        />
                    </div>
        })}
    </div>
  )
}

export default ProductFilter
