import { Swiper, SwiperSlide } from 'swiper/react';
// import { useState } from 'react'
// import { Navigation, Thumbs } from 'swiper';
// import loadingimg from "../../images/loading.gif"
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"


import 'swiper/css';
import "swiper/css/navigation"
// import "swiper/css/thumbs"
import "../allcategory/allcatagory.scss"
import arrow from "../../images/arrow.svg"



export default ({
    products1,
  loading1,

    click,
    setClick,
}) => {

    const navigate = useNavigate()

    const card = loading1 ? "" :

        products1?.slice(0, products1.length / 2)?.map((product1) => (
            <div className="bestseller-card" key={product1?.id} id={product1?.id} onClick={() => {
                navigate(`/Detail/${product1?.id}`)
            }}>

                <div className="img-area">

                    <img src={product1?.image?.url} key={product1?.id} alt="" />
                </div>
                <h1>{product1?.name}</h1>
                <div className="price-area">
                    <p className="price">{product1?.price?.raw} $</p>
                </div>

            </div>




        ));
        const card2 = loading1 ? "" :
        products1?.slice(products1.length / 2, products1.length)?.map((variant) => (
            <div className="bestseller-card" key={variant?.id} id={variant?.id} onClick={() => {
                navigate(`/Detail/${variant?.id}`)
            }}>

              
                <div className="img-area">

                    <img src={variant?.image.url} key={variant?.id} alt="" />
                </div>
                <h1>{variant?.name}</h1>
                <div className="price-area">
                    <p className="price">{variant?.price?.raw} $</p>
                </div>
            </div>




        ))


    return (

        <>
            <div className="allcategory-area">
                {click ? card : card2 }
                
            </div>
        </>
    );
};