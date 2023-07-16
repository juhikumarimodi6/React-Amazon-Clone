import React from 'react';
import Slider from 'react-slick';
import {Banner1, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7} from '../Assets/BannerImages/Image'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';
import prevArrow from '../Assets/Logo/prevArrow.png'
import nextArrow from '../Assets/Logo/nextArrow.png'

const ImageCarousel = () => {

    const CustomPrevArrow = ({ onClick }) => (
        <button className="custom-arrow custom-prev-arrow" onClick={onClick} > 
            <img src={prevArrow} alt="prevIcon" className='prevImg'/>
        </button>
    );

    const CustomNextArrow = ({ onClick }) => (
        <button className="custom-arrow custom-next-arrow" onClick={onClick} > 
            <img src={nextArrow} alt="nextIcon" className='nextImg'/>
        </button>
    );

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
    };

    return (
        <div className='carousel-container'>
            <Slider {...settings}>
                <div>
                    <img width="100%" src={Banner1} className='banner-img' alt = "banner1"/>
                </div>
                <div>
                    <img width="100%" src={Banner2} className='banner-img' alt = "banner2"/>
                </div>
                <div>
                    <img width="100%" src={Banner3} className='banner-img' alt = "banner3"/>
                </div>
                <div>
                    <img width="100%" src={Banner4} className='banner-img' alt = "banner4"/>
                </div>
                <div>
                    <img width="100%" src={Banner5} className='banner-img' alt = "banner5"/>
                </div>
                <div>
                    <img width="100%" src={Banner6} className='banner-img' alt = "banner6"/>
                </div>
                <div>
                    <img width="100%" src={Banner7} className='banner-img' alt = "banner7"/>
                </div>
            </Slider>
      </div>
    );
  };

  export default ImageCarousel;
  