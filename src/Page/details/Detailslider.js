import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react'
import { Navigation, Thumbs } from 'swiper';
import loadingimg from "../../images/loading.gif"

import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "./detail.scss"


export default ({product,loading}) => {
    const [activeThumb , setActiveThumb] = useState()
    return (
        loading ? <div className="loading-container">
                 <img className='loading' src={loadingimg} alt="" />
                </div> :
        <>
            <Swiper
                spaceBetween={50}

                loop={true}
                navigation={true}
                arrow={true}
                modules={[Navigation, Thumbs]}
                thumbs={{ swiper : activeThumb }}
                className="product-swiper"


            >
                {product?.assets?.map((variant) => (

                <SwiperSlide key={variant?.id} ><img src={variant?.url} alt="" /></SwiperSlide>
                ))}
              
            </Swiper>
            <Swiper
                onClick={setActiveThumb}
                spaceBetween={10}
                slidesPerView={2}
                loop={true}


                modules={[Navigation, Thumbs]}
                className="product-swiper-thumbs"


            >
                {product?.assets?.map((variant)=> (

                <SwiperSlide key={variant?.id} >
                    <div className="product-swiper-thumbs-wrapper">
                        <img src={variant?.url} alt="" />
                    </div>
                </SwiperSlide>
                ))}
              


            </Swiper>
        </>
    );
};