import React, { useEffect, useState } from 'react'
import AmazonLogo from '../Assets/Logo/HeaderLogo.png'
import { TfiLocationPin } from "react-icons/tfi";
import SearchFilter from './SearchFilter';
import Flag from "../Assets/Logo/Flag.png"
import ShoppingCart from "../Assets/Logo/shoppingCart.png"
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalAppContext } from '../context/AppContext';
import {auth} from '../Firebase'
import { signOut } from 'firebase/auth';

const Header1 = () => {
    const navigate = useNavigate();
    const {ContextState, ContextDispatch} = useGlobalAppContext();
    console.log(ContextDispatch)
    const [username, setUserName] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log(user);
            if(user) {
                setUserName(user.displayName);
            } else {
                setUserName("");
            }
        })
    }, []);
    const handleSignOut = (event) => {
        // event.preventDefault();
        console.log("hande signout")
        signOut(auth).then(() => {
            console.log("sign out successfu")
        }).catch((error) => {
            console.log(error)
        })
        ContextDispatch({type:'SIGN-OUT'})
        navigate('/')
    }

    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

  return (
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
            <SearchFilter />
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
                            Hello, {username? Capitalize(username):"sign in"}
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
            {username && 
                <div className='header-option nav-item' onClick = {event => handleSignOut(event)} >
                    <span className='header-optionLineTwo'>
                        Sign Out
                    </span>
                </div> 
            }
        </div>
  )
}

export default Header1;