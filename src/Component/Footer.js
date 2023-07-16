import './Footer.css';
import AmazonFooterLogo from '../Assets/Logo/HeaderLogo.png'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-top">
                <div className="aboutus">
                    <h4>Get to Know Us</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Press Releases</li>
                        <li>Amazon Science</li>
                    </ul>
                </div>
                <div className="contactus">
                    <h4>Connect with Us</h4>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className="make-money">	
                    <h4>Make Money with Us</h4>
                    <ul>
                        <li>Sell on Amazon</li>
                        <li>Sell under Amazon Accelerator</li>
                        <li>Protect and Build Your Brand</li>
                        <li>Amazon Global Selling</li>
                        <li>Become an Affiliate</li>
                        <li>Fulfilment by Amazon</li>
                        <li>Advertise Your Products</li>
                        <li>Amazon Pay on Merchants</li>
                    </ul>
                </div>
                <div className="help">	
                    <h4>Let Us Help You</h4>
                    <ul>
                        <li>COVID-19 and Amazon</li>
                        <li>Your Account</li>
                        <li>Returns Centre</li>
                        <li>100% Purchase Protection</li>
                        <li>Amazon App Download</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-mid">
                <div>
                    <Link to='/'>
                        <img src={AmazonFooterLogo} alt="amazon-logo" className="amazon-footer-logo" />
                    </Link>
                </div>
                <div className="countries">
                    <ul>
                        <li>Australia</li>
                        <li>Brazil</li>
                        <li>Canada</li>
                        <li>China</li>
                        <li>France</li>
                        <li>Germany</li>
                        <li>Italy</li>
                        <li>Japan</li>
                        <li>Mexico</li>
                        <li>Netherlands</li>
                        <li>Poland</li>
                        <li>Singapore</li>
                        <li>Spain</li>
                        <li>Turkey</li>
                        <li>United Arab Emirates</li>
                        <li>United Kingdom</li>
                        <li>United States</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <table>
                    <tbody>
                        <tr className="footer-table-row">
                            <td className="navFooterDescItem">
                                <li><h5>AbeBooks</h5>
                                    Books, art <br />& collectibles
                                </li>
                            </td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem">
                                <li><h5>Amazon Web Services</h5>
                                    Scalable Cloud <br />Computing Services
                                </li>
                            </td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem">
                                <li><h5>Audible</h5>
                                    Download <br />Audio Books
                                </li>
                            </td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem">
                                <li><h5>DPReview</h5>
                                    Digital <br />Photography
                                </li>
                            </td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem">
                                <li><h5>IMDb</h5>
                                    Movies, TV <br />& Celebrities
                                </li>
                            </td>
                            <td className="navFooterDescSpacer"></td>
                        </tr>
                        <tr className="footer-table-row"></tr>
                        <tr className="footer-table-row">
                            <td className="navFooterDescItem">
                                <li><h5>Shopbop</h5>
                                    Designer <br />Fashion Brands
                                </li>
                            </td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem">
                                <li><h5>Amazon Business</h5>
                                    Everything For <br />Your Business
                                </li>
                            </td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem">
                                <li><h5>Prime Now</h5>
                                    2-Hour Delivery <br />on Everyday Items
                                </li>
                            </td>
                            <td className="navFooterDescSpacer"></td>
                            <td className="navFooterDescItem">
                                <li><h5>Amazon Prime Music</h5>
                                    100 million songs, ad-free <br />Over 15 million podcast episodes
                                </li>
                            </td>
                            <td className="navFooterDescSpacer"></td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className="footer-conditions">
                <div className="footer-privacy">
                    <li>Conditions of Use & Sale </li>
                    <li>Privacy Notice</li>
                    <li>Interest-Based Ads</li>
                </div>
                    © 1996-2023, Amazon.com, Inc. or its affiliates
            </div>
        </div>
    )
}

export default Footer;