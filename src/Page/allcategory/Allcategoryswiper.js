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
    phoneproducts,
    phoneloading,
    samsungproduct,
    samsungloading,
    click,
    setClick,
       click1,
    setClick1,
    appleloading,
    appleproduct,
    click2,
    setClick2,
 
}) => {
    const navigate = useNavigate()
 
     const card1 = samsungloading ? "" :

        samsungproduct?.map((variant) => (
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
           const card3 = appleloading ? "" :

        appleproduct?.map((variant) => (
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

    // const [activeThumb , setActiveThumb] = useState()
            
    const card = phoneloading ? "" :

        phoneproducts?.slice(0, phoneproducts.length / 2)?.map((variant) => (
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
        const card2 = phoneloading ? "" :
        phoneproducts?.slice(phoneproducts.length / 2, phoneproducts.length)?.map((variant) => (
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
             
          
                {
                click ? card : card2 
                }
            
                
            </div>
        </>
    );
};