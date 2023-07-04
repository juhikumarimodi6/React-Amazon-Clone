import React from 'react'
import {Banner1, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7} from '../Images/Image'
import './Home.css'
import Product from './Product'
import Carousel from 'better-react-carousel'


const Home = () => {
  return (
    <div className='home'>
        <div className='home-container'>
            <Carousel loop>
                <Carousel.Item>
                    <img width="100%" src={Banner1} className='home-img'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={Banner2} className='home-img' />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={Banner3} className='home-img' />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={Banner4} className='home-img' />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={Banner5} className='home-img'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={Banner6} className='home-img' />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={Banner7} className='home-img' />
                </Carousel.Item>
            </Carousel>
        </div>
        <div className='home-row'>
            <Product 
                url = "https://m.media-amazon.com/images/I/41SYHl5edWL._AC_SR400,600_.jpg"
                title = 'OPPO F23 5G (Bold Gold, 8GB RAM, 256GB Storage) | 5000 mAh Battery with 67W SUPERVOOC Charger | 64MP Rear Triple AI Camera with Microlens | 6.72" FHD+ 120Hz Display | with Offers'
                rating = {4}
                price = {29499}
            />
            <Product 
                url = "https://m.media-amazon.com/images/I/41HTj50w9sL._AC_SR400,600_.jpg"
                title = 'BATA Mens Wonder Rain Shoe'
                rating = {4}
                price = {29499}
            />
            <Product 
                url = "https://m.media-amazon.com/images/I/71zBUvib7WL._AC_UL600_FMwebp_QL65_.jpg"
                title = 'Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White, Hygiene Steam)'
                rating = {4}
                price = {23490}
            />
        </div>
        <div className='home-row'>
        <Product 
                url = "https://m.media-amazon.com/images/I/51DjnsHflRL._SX300_SY300_QL70_FMwebp_.jpg"
                title = 'Decor Production PVC Vinyl Sparkle Lamination Self Adhesive Vinyl Wall Poster Wall Stickers (sparkle_poster_pt2, Multicolour, 18x23 Inches)'
                rating = {4}
                price = {279}
            />
            <Product 
                url = "https://m.media-amazon.com/images/I/715Ildk67TL._AC_UL600_FMwebp_QL65_.jpg"
                title = "Amazon Brand - Symbol Women's Jacket"
                rating = {4}
                price = {1025}
            />
            <Product 
                url = "https://m.media-amazon.com/images/I/71p7isoot6L._SX679_.jpg"
                title = "Plantex Stainless Steel 2-Tier Kitchen Rack/Spice Shelf/Kitchen/Pantry Storage Organizer(Silver-Chrome)"
                rating = {4}
                price = {1139}
            />
            <Product 
                url = "https://m.media-amazon.com/images/I/31mZkrSUtQL._SX300_SY300_QL70_FMwebp_.jpg"
                title = "JBL Wave 200 TWS, True Wireless in-Ear Earbuds with Mic, 20 Hours Playtime, Deep Bass Sound, use Single Earbud or Both, Bluetooth 5.0, Type C & Voice Assistant Support for Mobile Phones (Blue)"
                rating = {4}
                price = {2499}
            />
        </div>
        <div className='home-row'>
            <Product 
                url = "https://m.media-amazon.com/images/I/91OzzQSg47L._AC_UY327_FMwebp_QL65_.jpg"
                title = "LG 139 cm (55 inches) 4K Ultra HD Smart LED TV 55UQ7500PSF (Ceramic Black)"
                rating = {4}
                price = {45990}
            />
            <Product 
                url = "https://m.media-amazon.com/images/I/51RI7uO476L._SY300_SX300_QL70_FMwebp_.jpg"
                title = "URBAN CREW INI Candle Holder for Home Decor | Candle Stands for Home Decor | Dining Table Decorative Items, Antique Home Decor, Living Room |Candle Stand (Pack of 3)"
                rating = {4}
                price = {899}
            />
        </div>
        <div className='home-row'>
            <Product 
                url = "https://m.media-amazon.com/images/I/81I3nSMWDNL._AC_UY327_FMwebp_QL65_.jpg"
                title = "Redmi 80 cm (32 inches) HD Ready Smart LED Fire TV L32R8-FVIN (Black)"
                rating = {4}
                price = {12999}
            />
        </div>
    </div>
  )
}

export default Home
