import React from 'react'
import AmazonLogo from '../Assets/Logo/HeaderLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import { TfiLocationPin } from "react-icons/tfi";
import ShoppingCart from "../Assets/Logo/shoppingCart.png"
import Flag from "../Assets/Logo/Flag.png"
import './Header.css'
import Header2 from './Header2';

const Header = () => {
  return (
    <div className="header-container">
        <div className='header'>
            <img className="header-logo" src={AmazonLogo} alt="logo"/>
            < TfiLocationPin className='header-locationPin'/>
            <div className='header-option location'>
                    <span className='header-optionLineOne'>
                        Hello
                    </span>
                    <span className='header-optionLineTwo'>
                        Select your address
                    </span>
                </div>
            <div className="header-search">
                <span className='header-all'>All</span>
                <input className='header-search-Input' type="text" placeholder='Search Amazon.in'/>
                <SearchIcon className='header-searchIcon' />
            </div>
            <div className="header-nav">
                <div className='header-option language'>
                    <img src={Flag} alt="flag" className='flag'/>
                    <span>
                        EN
                    </span>
                </div>
                <div className='header-option'>
                    <span className='header-optionLineOne'>
                        Hello, sign in
                    </span>
                    <span className='header-optionLineTwo'>
                        Account & Lists
                    </span>
                </div>
                <div className='header-option'>
                    <span className='header-optionLineOne'>
                        Returns
                    </span>
                    <span className='header-optionLineTwo'>
                        & Orders
                    </span>
                </div>
            </div>
            <div className='header-optionBasket'>
                <div className='header-cart-container'>
                    <span className='header-optionLineTwo header-basketCount'>0</span>
                    <img src={ShoppingCart} alt="cart" className='header-cart'/>
                </div>
                    <span className='header-optionLineTwo cart'>
                        Cart
                    </span>
            </div>
        </div>
        <div>
            <Header2 />
        </div>
    </div>
  )
}

export default Header