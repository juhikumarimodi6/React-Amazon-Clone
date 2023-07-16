import React from 'react'
// import Carousel from 'better-react-carousel'
import './Home.css'
import ImageCarousel from './ImageCarousel'
import Header2 from './Header2'
import Data from './TestData'
import { useGlobalAppContext } from '../context/AppContext'
import Products from './Products'
import ProductFilter from './ProductFilter'

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

    React.useEffect(() => {
        getProductData();
    }, [])

  return (
    <div className='home'>
        <Header2 />
        <ImageCarousel />
        {ContextState.searchInput ? <ProductFilter /> : <Products />}
    </div>
  )
}

export default Home
