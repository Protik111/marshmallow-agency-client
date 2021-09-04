import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import styles from "./CustomerSlider.module.css";
//aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';

// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const CustomerSlider = (props) => {
    const { id, nameR, imgR, review } = props.review;
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={`${styles.sliderContainer} col-md-4`}>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
            "rotate": 0,
            "stretch": 0,
            "depth": 0,
            "modifier": 0,
            "slideShadows": true
        }} pagination={true} className="mySwiper">
        <SwiperSlide>
            <div className={`${styles.slider_item} p-3 m-3`}>
                <div className={`${styles.slider_img} mt-3`}>
                    <img className="" src={imgR} alt="" />
                </div>
                <div className={`${styles.reviewName} m-3`}>
                    <p>{review}</p>
                    <h5>{nameR}</h5>
                </div>
            </div>
        </SwiperSlide>
        </Swiper>
        </div>
    );
};

export default CustomerSlider;