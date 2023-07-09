import React from 'react'
// import Carousel from 'better-react-carousel'
import Product from './Product'
import {BataMens, Decor, JBL, TV, Phone, RedmiTV, WashingMachine, SteelRack, CandleHolder, WomenJacket} from '../Assets/ItemImages/Index'
import './Home.css'
import ImageCarousel from './ImageCarousel'

const Home = () => {
  return (
    <div className='home'>
        <div className='home-carousel'>
            <ImageCarousel />
        </div>
        <div className='home-row'>
            <Product
                id = {12341}
                url = {Phone}
                title = 'OPPO F23 5G (Bold Gold, 8GB RAM, 256GB Storage) | 5000 mAh Battery with 67W SUPERVOOC Charger | 64MP Rear Triple AI Camera with Microlens | 6.72" FHD+ 120Hz Display | with Offers'
                rating = {4}
                price = {29499}
            />
            <Product 
                id = {12342}
                url = {BataMens}
                title = 'BATA Mens Wonder Rain Shoe'
                rating = {4}
                price = {29499}
            />
            <Product 
                id = {12343}
                url = {WashingMachine}
                title = 'Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White, Hygiene Steam)'
                rating = {4}
                price = {23490}
            />
        </div>
        <div className='home-row'>
        <Product 
                id = {12344}
                url = {Decor}
                title = 'Decor Production PVC Vinyl Sparkle Lamination Self Adhesive Vinyl Wall Poster Wall Stickers (sparkle_poster_pt2, Multicolour, 18x23 Inches)'
                rating = {4}
                price = {279}
            />
            <Product 
                id = {12345}
                url = {WomenJacket}
                title = "Amazon Brand - Symbol Women's Jacket"
                rating = {4}
                price = {1025}
            />
            <Product
                id = {12346} 
                url = {SteelRack}
                title = "Plantex Stainless Steel 2-Tier Kitchen Rack/Spice Shelf/Kitchen/Pantry Storage Organizer(Silver-Chrome)"
                rating = {4}
                price = {1139}
            />
            <Product 
                id = {12347}
                url = {JBL}
                title = "JBL Wave 200 TWS, True Wireless in-Ear Earbuds with Mic, 20 Hours Playtime, Deep Bass Sound, use Single Earbud or Both, Bluetooth 5.0, Type C & Voice Assistant Support for Mobile Phones (Blue)"
                rating = {4}
                price = {2499}
            />
        </div>
        <div className='home-row'>
            <Product 
                id = {12348}
                url = {TV}
                title = "LG 139 cm (55 inches) 4K Ultra HD Smart LED TV 55UQ7500PSF (Ceramic Black)"
                rating = {4}
                price = {45990}
            />
            <Product 
                id = {12349}
                url = {CandleHolder}
                title = "URBAN CREW INI Candle Holder for Home Decor | Candle Stands for Home Decor | Dining Table Decorative Items, Antique Home Decor, Living Room |Candle Stand (Pack of 3)"
                rating = {4}
                price = {899}
            />
        </div>
        <div className='home-row'>
            <Product 
                id = {12350}
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
