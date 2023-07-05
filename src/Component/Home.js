import React from 'react'
import Carousel from 'better-react-carousel'
import Product from './Product'
import {Banner1, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7} from '../Assets/BannerImages/Image'
import {BataMens, Decor, JBL, TV, Phone, RedmiTV, WashingMachine, SteelRack, CandleHolder, WomenJacket} from '../Assets/ItemImages/Index'
import './Home.css'
// import ImageCarousel from './ImageCarousel'

const Home = () => {

    const CustomPrevArrow = ({ onClick }) => (
        <button className="custom-arrow custom-prev-arrow" onClick={onClick} />
    );

  return (
    <div className='home'>
        <div className='home-carousel'>
            {/* <ImageCarousel /> */}
             {/* carousel default row and col is 1 */}
            <Carousel rows={1} cols={1} loop autoplay={2000} arrowLeft={CustomPrevArrow}>             
                <Carousel.Item>
                    <img width="100%" src={Banner1} className='home-img' alt = "banner1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={Banner2} className='home-img' alt = "banner2"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={Banner3} className='home-img' alt = "banner3"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={Banner4} className='home-img' alt = "banner4"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={Banner5} className='home-img' alt = "banner5"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={Banner6} className='home-img' alt = "banner6"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={Banner7} className='home-img' alt = "banner7"/>
                </Carousel.Item>
            </Carousel>
        </div>
        <div className='home-row'>
            <Product
                url = {Phone}
                title = 'OPPO F23 5G (Bold Gold, 8GB RAM, 256GB Storage) | 5000 mAh Battery with 67W SUPERVOOC Charger | 64MP Rear Triple AI Camera with Microlens | 6.72" FHD+ 120Hz Display | with Offers'
                rating = {4}
                price = {29499}
            />
            <Product 
                url = {BataMens}
                title = 'BATA Mens Wonder Rain Shoe'
                rating = {4}
                price = {29499}
            />
            <Product 
                url = {WashingMachine}
                title = 'Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White, Hygiene Steam)'
                rating = {4}
                price = {23490}
            />
        </div>
        <div className='home-row'>
        <Product 
                url = {Decor}
                title = 'Decor Production PVC Vinyl Sparkle Lamination Self Adhesive Vinyl Wall Poster Wall Stickers (sparkle_poster_pt2, Multicolour, 18x23 Inches)'
                rating = {4}
                price = {279}
            />
            <Product 
                url = {WomenJacket}
                title = "Amazon Brand - Symbol Women's Jacket"
                rating = {4}
                price = {1025}
            />
            <Product 
                url = {SteelRack}
                title = "Plantex Stainless Steel 2-Tier Kitchen Rack/Spice Shelf/Kitchen/Pantry Storage Organizer(Silver-Chrome)"
                rating = {4}
                price = {1139}
            />
            <Product 
                url = {JBL}
                title = "JBL Wave 200 TWS, True Wireless in-Ear Earbuds with Mic, 20 Hours Playtime, Deep Bass Sound, use Single Earbud or Both, Bluetooth 5.0, Type C & Voice Assistant Support for Mobile Phones (Blue)"
                rating = {4}
                price = {2499}
            />
        </div>
        <div className='home-row'>
            <Product 
                url = {TV}
                title = "LG 139 cm (55 inches) 4K Ultra HD Smart LED TV 55UQ7500PSF (Ceramic Black)"
                rating = {4}
                price = {45990}
            />
            <Product 
                url = {CandleHolder}
                title = "URBAN CREW INI Candle Holder for Home Decor | Candle Stands for Home Decor | Dining Table Decorative Items, Antique Home Decor, Living Room |Candle Stand (Pack of 3)"
                rating = {4}
                price = {899}
            />
        </div>
        <div className='home-row'>
            <Product 
                url = {RedmiTV}
                title = "Redmi 80 cm (32 inches) HD Ready Smart LED Fire TV L32R8-FVIN (Black)"
                rating = {4}
                price = {12999}
            />
        </div>
    </div>
  )
}

export default Home
