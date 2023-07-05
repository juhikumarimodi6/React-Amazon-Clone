import React from "react";
import './Header2.css';
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderPrime from '../Assets/AmazonPrime/Header2Prime.jpg'

const Header2 = () => {
    const NavMenu = ["Fresh", "Amazon miniTV", "Sell", "Amazon Pay", "Gift Cards", "Buy Again", 
                    "Gift Ideas", "Health, HouseHold & Personal Care", "AmazonBasics", "Home Improvement", 
                    "Books", "Baby", "Coupons", "Subscribe & Save", "Toys & Games", "Sports, Fitness & Outdoors"]
    return (
        <div className="header2-container">
            <div className="nav-left">
                <GiHamburgerMenu className="hamburger"/><span >All</span>
            </div>
            <div className="nav-fill">
                {NavMenu.map((item, index) => {
                    return<a href = "#" className="nav-fill-link" key = {index}>{item}</a>
                })}
            </div>
            <div className="nav-right">
                <img src={HeaderPrime} alt="prime member" />
            </div>
        </div>
    )
}

export default Header2;