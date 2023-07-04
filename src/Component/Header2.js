import React from "react";
import './Header2.css';
import { GiHamburgerMenu } from "react-icons/gi";


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
                {NavMenu.map((item) => {
                    return<a className="nav-fill-link">{item}</a>
                })}
            </div>
            <div className="nav-right">
                <img src="https://m.media-amazon.com/images/G/31/prime/ACQ/PD23/SWM_400x39._CB600944639_.jpg" alt="prime member" />
            </div>
        </div>
    )
}

export default Header2;