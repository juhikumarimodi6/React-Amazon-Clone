import React from 'react'
import Product from './Product';
import { useGlobalAppContext } from '../context/AppContext';

const Products = () => {
    const {ContextState} = useGlobalAppContext();
    return (
        <div className='product-container'>
            {ContextState.products && ContextState.products.map((item) => {
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

export default Products
