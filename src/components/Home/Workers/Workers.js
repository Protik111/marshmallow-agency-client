import React, { useEffect } from 'react';
import styles from './Workers.module.css';
import ideaImage from '../../../images/logos/idea.png';
import tickImage from '../../../images/logos/tick.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Workers = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className={`${styles.header} container-fluid mb-5`}>
            <div className="row">
                <div data-aos="fade-up" data-aos-duration="2000" className={`${styles.header_text} col-md-5 offset-md-1 offset-sm-1`}>
                    <h4>Our Work Process</h4>
                    <h1>Discover New Idea With Us!</h1>
                    <h5>Imagination will take us everywhere</h5>
                    <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repudiandae nulla dolor? Ratione nam quia minus distinctio.</p>
                    <div className={`${styles.tick_container}`}>
                        <div className={`${styles.tick1}`}>
                            <img src={tickImage} alt=""/>
                            <p className="m-2">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className={`${styles.tick1}`}>
                            <img src={tickImage} alt=""/>
                            <p className="m-2">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className={`${styles.tick1}`}>
                            <img src={tickImage} alt=""/>
                            <p className="m-2">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" className="col-md-5 offset-md-1 mt-5">
                    <img className={`${styles.idea_image} img-fluid mt-5`} src={ideaImage} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Workers;