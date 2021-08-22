import React, { useEffect } from 'react';
//import images
import image1 from '../../../images/logos/starter.png';
import image2 from '../../../images/logos/proffessional.png';
import image3 from '../../../images/logos/premium.png';
import styles from './Cards.module.css';

//Animations from AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cards = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="container mt-5 mb-5">
            <div data-aos="fade-up" class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class={`${styles.card_container} card text-center`}>
                        <div class={`${styles.card_image} mt-5`}>
                            <img src={image1} class="card-img-top" alt="..."/>
                        </div>
                        <div class={`${styles.card_text} card-body p-5`}>
                            <h5 class="card-title">Starter Business</h5>
                            <h1 className={styles.card_price}>$23</h1>
                            <p class="card-text">Create a Web Application</p>
                            <p class="card-text">Connect Domain</p>
                            <p class="card-text">Business and Ecommerce</p>
                            <p class="card-text">Idea for smaller proffesional Websites</p>
                            <p class="card-text">Web Spaces</p>
                            <div className={`${styles.see_more} text-center`}>
                                <button type="button">View More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                <div class={`${styles.card_container} card text-center`}>
                        <div class={`${styles.card_image} mt-5`}>
                            <img src={image2} class="card-img-top" alt="..."/>
                        </div>
                        <div class={`${styles.card_text} card-body p-5`}>
                            <h5 class="card-title">Proffesional</h5>
                            <h1 className={styles.card_price}>$50</h1>
                            <p class="card-text">Create a Web Application</p>
                            <p class="card-text">Connect Domain</p>
                            <p class="card-text">Business and Ecommerce</p>
                            <p class="card-text">Idea for smaller proffesional Websites</p>
                            <p class="card-text">Web Spaces</p>
                            <div className={`${styles.see_more} text-center`}>
                                <button type="button">View More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                <div class={`${styles.card_container} card text-center`}>
                        <div class={`${styles.card_image} mt-5`}>
                            <img src={image3} class="card-img-top" alt="..."/>
                        </div>
                        <div class={`${styles.card_text} card-body p-5`}>
                            <h5 class="card-title">Premium</h5>
                            <h1 className={styles.card_price}>$87</h1>
                            <p class="card-text">Create a Web Application</p>
                            <p class="card-text">Connect Domain</p>
                            <p class="card-text">Business and Ecommerce</p>
                            <p class="card-text">Idea for smaller proffesional Websites</p>
                            <p class="card-text">Web Spaces</p>
                            <div className={`${styles.see_more} text-center`}>
                                <button type="button">View More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;