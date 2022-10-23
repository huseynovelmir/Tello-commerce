import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import iphones from "../../../images/iphones.png"
import "../Slider/slider.scss"
import iphone14 from "../../../images/iphone14.webp"
import iwatch from "../../../images/iwatch.PNG"

import React, { Component } from "react";
import Slider from "react-slick";
import gradient from "../../../images/bg.png"


export default class Responsive extends Component {
    render() {
        const settings = {
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
         
        };
        return (
            <div className="slider-mom">
                    <div className="main-img">
                <img src={gradient} alt="" />
            </div>

                <Slider {...settings}>
                    <div className="slider">
                        <div>
                            < h3 > Buy&Sell
                                What 's Now & Next</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </p>
                        </div>

                        <img src={iphones} alt="" className="iphones" />
                    </div>

                    <div className="slider">
                        <div>
                            <h3> Buy New Iphone 14 Pro Max</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </p>
                        </div>

                        <img src={iphone14} alt="" className="iphone14" />
                    </div>
                    <div className="slider">
                        <div>
                            <h3> Buy New Iwatch Ultra</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </p>
                        </div>

                        <img src={iwatch} alt="" className="iwatch" />
                    </div>

                </Slider>
            </div>
        );
    }

}
// import React from 'react'

// function Slider() {
//   return (
//     <div>Slider</div>
//   )
// }

// export default Slider