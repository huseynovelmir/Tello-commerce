import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import "../marcaslider/marcaslider.scss"

import React, { Component } from "react";
import Slider from "react-slick";
import card from "../../../images/toshiba.png"
import phlips from "../../../images/phlips.png"
import hp from "../../../images/hp.png"
import electro from "../../../images/electro.png"
import gorenje from "../../../images/gorenje.png"
import bosch from "../../../images/bosch.png"






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
   

                <Slider {...settings}>
                    <div className="marca-slider">
                     

                        <img src={card} alt="" className="iphones" />
                        <img src={phlips} alt="" className="iphones" />
                        <img src={hp} alt="" className="iphones" />
                        
                        <img src={electro} alt="" className="iphones" />
                        <img src={gorenje} alt="" className="iphones" />
                        <img src={bosch} alt="" className="iphones" />

                    </div>

                    <div className="marca-slider">
                      

                       <img src={card} alt="" className="iphones" />
                        <img src={phlips} alt="" className="iphones" />
                        <img src={hp} alt="" className="iphones" />
                        <img src={electro} alt="" className="iphones" />
                        <img src={gorenje} alt="" className="iphones" />
                        <img src={bosch} alt="" className="iphones" />
                    </div>
                    <div className="marca-slider">
                    

                    <img src={card} alt="" className="iphones" />
                        <img src={phlips} alt="" className="iphones" />
                        <img src={hp} alt="" className="iphones" />
                        <img src={electro} alt="" className="iphones" />
                        <img src={gorenje} alt="" className="iphones" />
                        <img src={bosch} alt="" className="iphones" />
                    </div>

                </Slider>
      
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