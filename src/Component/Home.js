import React from 'react'
// import Carousel from 'better-react-carousel'
import Product from './Product'
import './Home.css'
import ImageCarousel from './ImageCarousel'
import Header2 from './Header2'
import Data from './TestData'
import { useGlobalAppContext } from '../context/AppContext'

const Home = () => {
    const {ContextState, ContextDispatch} = useGlobalAppContext();
    console.log(ContextState);

    const getProductData = async () => {
        try{
            const url = 'https://fakestoreapi.com/products';
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            // const data = Data;
            // console.log(data);
            await ContextDispatch({
                    type:'PRODUCT_DATA',
                    payload: data,
                })
        } catch(error) {
            console.error("Error fetching product data" + error)
        }
    }
    console.log(ContextState.products);

    React.useEffect(() => {
        getProductData();
    }, [])

  return (
    <div className='home'>
        <Header2 />
        <div className='home-carousel'>
            <ImageCarousel />
        </div>
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
    </div>
  )
}

export default Home
