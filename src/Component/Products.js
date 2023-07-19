import React from 'react'
import Product from './Product';
import { useGlobalAppContext } from '../context/AppContext';

const Products = () => {
    const {ContextState} = useGlobalAppContext();
    return (
        <div className='product-container'>
            {ContextState.products && ContextState.products.map((item, index) => {
                return <div className='product-home'>
                            <Product
                                key = {index}
                                item = {item}
                            />
                        </div>
            })}
        </div>
    )
}

export default Products
