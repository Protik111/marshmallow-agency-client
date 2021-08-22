import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import styles from './Customer.module.css';

//import images
import customer1 from '../../../images/testimonial/testimonial1.jpg';
import customer2 from '../../../images/testimonial/testimonial2.jpg';
import customer3 from '../../../images/testimonial/testimonial3.jpg';
import customer4 from '../../../images/testimonial/testimonial4.jpg';
import customer5 from '../../../images/testimonial/testimonial5.jpg';

//aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';



// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const Customer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className={`${styles.tesimonial_container} mt-5 mb-5 p-5`}>
            <div data-aos="fade-right" className="row">
                <div className="col-md-5 offset-md-1 mt-5">
                    <h5 className={styles.heading}>Reviews</h5>
                    <h2 className={styles.heading}>Our Customers Are Our <br/>Biggest Fans</h2>
                </div>
                <div data-aos="fade-left" className={`${styles.reviews_container} col-md-6`}>
                    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                        "rotate": 200,
                        "stretch": 0,
                        "depth": 100,
                        "modifier": 1,
                        "slideShadows": true
                    }} pagination={true} className="mySwiper">
                        <SwiperSlide>
                            <div className={`${styles.slider_item} p-5`}>
                                <div>
                                    <img className="" src={customer1} alt=""/>
                                </div>
                                <div className="m-3">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, sit?</p>
                                    <h5>David Backhem</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${styles.slider_item} p-5`}>
                                <div>
                                    <img src={customer2} alt=""/>
                                </div>
                                <div className="m-3">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, sit?</p>
                                    <h5>David Backhem</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${styles.slider_item} p-5`}>
                                <div>
                                    <img src={customer3} alt=""/>
                                </div>
                                <div className="m-3">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, sit?</p>
                                    <h5>David Backhem</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${styles.slider_item} p-5`}>
                                <div>
                                    <img src={customer4} alt=""/>
                                </div>
                                <div className="m-3">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, sit?</p>
                                    <h5>David Backhem</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${styles.slider_item} p-5`}>
                                <div>
                                    <img src={customer5} alt=""/>
                                </div>
                                <div className="m-3">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, sit?</p>
                                    <h5>David Backhem</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Customer;