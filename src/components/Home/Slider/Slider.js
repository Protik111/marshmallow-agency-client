import React, { useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './Slider.module.css';

//Animations from AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

//import slider images
import slider1 from '../../../images/carousel/slider1.jpg';
import slider2 from '../../../images/carousel/slider2.jpg';
import slider3 from '../../../images/carousel/slider3.jpg';
import slider4 from '../../../images/carousel/slider4.jpg';
import slider5 from '../../../images/carousel/slider5.jpg';

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

const Slider = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="mt-5 mb-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="row d-flex justify-content-between">
                <h1 className="col-md-5 offset-md-1 mt-md-5 mb-md-5 text-center">Lets See Our Latest Projects</h1>
                <div className={`${styles.see_more} text-center col-md-2 offset-md-4 m-md-5`}>
                    <button type="button">View More</button>
                </div>
            </div>
            <Swiper slidesPerView={1} spaceBetween={20} pagination={{
                "clickable": true
            }} breakpoints={{
                "640": {
                    "slidesPerView": 2,
                    "spaceBetween": 20
                },
                "768": {
                    "slidesPerView": 4,
                    "spaceBetween": 40
                },
                "1024": {
                    "slidesPerView": 5,
                    "spaceBetween": 50
                }
            }} className="mySwiper">
                <SwiperSlide className={`${styles.slider} m-5`}><img src={slider1} alt=""/></SwiperSlide>
                <SwiperSlide className={`${styles.slider} m-5`}><img src={slider2} alt=""/></SwiperSlide>
                <SwiperSlide className={`${styles.slider} m-5`}><img src={slider3} alt=""/></SwiperSlide>
                <SwiperSlide className={`${styles.slider} m-5`}><img src={slider4} alt=""/></SwiperSlide>
                <SwiperSlide className={`${styles.slider} m-5`}><img src={slider5} alt=""/></SwiperSlide>
                <SwiperSlide className={`${styles.slider} m-5`}><img src={slider1} alt=""/></SwiperSlide>
                <SwiperSlide className={`${styles.slider} m-5`}><img src={slider2} alt=""/></SwiperSlide>
                <SwiperSlide className={`${styles.slider} m-5`}><img src={slider3} alt=""/></SwiperSlide>
                <SwiperSlide className={`${styles.slider} m-5`}><img src={slider4} alt=""/></SwiperSlide>
                <SwiperSlide className={`${styles.slider} m-5`}><img src={slider5} alt=""/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;