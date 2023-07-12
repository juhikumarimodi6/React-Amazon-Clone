import React, { useEffect, useState } from 'react'
import AmazonLogo from '../Assets/Logo/HeaderLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import { TfiLocationPin } from "react-icons/tfi";
import ShoppingCart from "../Assets/Logo/shoppingCart.png"
import Flag from "../Assets/Logo/Flag.png"
import './Header.css'
import Header2 from './Header2';
import { Link } from 'react-router-dom';
import { useGlobalAppContext } from '../context/AppContext';
import {auth} from '../Firebase'
import { signOut } from 'firebase/auth';

const Header = () => {
const {ContextState} = useGlobalAppContext();
    // console.log(contextState.ContextState.basketCount)
    const [username, setUserName] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user) {
                setUserName(user.displayName);
            } else {
                setUserName("");
            }
        })
    }, []);
    const handleSignOut = (event) => {
        event.preventDefault();
        console.log("hande signout")
        auth.signOut().then(() => {
            console.log("sign out successfu")
        }).catch((error) => {
            console.log(error)
        })
    }
  return (
    <div className="header-container">
        <div className='header'>
            <Link to={'/'}>
                <img className="header-logo nav-item" src={AmazonLogo} alt="logo"/>
            </Link>
            <div className="header-location-container nav-item">
                < TfiLocationPin className='header-locationPin'/>
                <div className='header-option location'>
                        <span className='header-optionLineOne'>
                            Hello
                        </span>
                        <span className='header-optionLineTwo'>
                            Select your address
                        </span>
                </div>
            </div>
                <div className="header-search">
                    <span className='header-all'>All</span>
                    <input className='header-search-Input' type="text" placeholder='Search Amazon.in'/>
                    <SearchIcon className='header-searchIcon' />
                </div>         
            <div className="header-nav">
                <div className='header-option  nav-item'>
                <div className='language'>
                    <img src={Flag} alt="flag" className='flag'/>
                    <span className='header-language'>
                        EN
                    </span>
                </div>
                </div>
                <Link to={'/login'} className='link' >
                    {/* <div className='header-option nav-item' onClick = {event => handleSignOut(event)} > */}
                    <div className='header-option nav-item' >
                        <span className='header-optionLineOne'>
                            Hello, {username? username:"sign in"}
                        </span>
                        <span className='header-optionLineTwo'>
                            Account & Lists
                        </span>
                    </div>
                </Link>
                <div className='header-option nav-item'>
                    <span className='header-optionLineOne'>
                        Returns
                    </span>
                    <span className='header-optionLineTwo'>
                        & Orders
                    </span>
                </div>
            </div>
            <Link to={'/checkout'} className='link'>
                <div className='header-optionBasket nav-item' >
                    <div className='header-cart-container'>
                        <span className='header-optionLineTwo header-basketCount'>{ContextState.basketCount}</span>
                        <img src={ShoppingCart} alt="cart" className='header-cart'/>
                    </div>
                    <span className='header-optionLineTwo cart'>
                        Cart
                    </span>
                </div>
            </Link>
        </div>
        <div>
            <Header2 />
        </div>
    </div>
  )
}

export default Header