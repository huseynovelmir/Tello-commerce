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
    xiomioproduct,
    xiomioloading,
}) => {
    // const [activeThumb , setActiveThumb] = useState()
    const navigate = useNavigate()

    const card = xiomioloading ? "" :

        xiomioproduct?.map((variant) => (
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




        ));
    


    return (

        <>
            <div className="allcategory-area">
                {card}
                
            </div>
        </>
    );
};