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
    watchproducts,
  watchloading,


}) => {

    const navigate = useNavigate()
console.log(watchproducts);
console.log("elmir");
    const card = watchloading ? "" :

        watchproducts?.map((watch) => (
            <div className="bestseller-card" key={watch?.id} id={watch?.id} onClick={() => {
                navigate(`/Detail/${watch?.id}`)
            }}>

                <div className="img-area">

                    <img src={watch?.image?.url} key={watch?.id} alt="" />
                </div>
                <h1>{watch?.name}</h1>
                <div className="price-area">
                    <p className="price">{watch?.price?.raw} $</p>
                </div>

            </div>




        ));
      


    return (

        <>
            <div className="allcategory-area">
                {card}
                
            </div>
        </>
    );
};