import React, { useEffect } from 'react';
import styles from '../Header/Header.module.css';
import headerImage from '../../../images/logos/group.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);
    return (
        <div className={`${styles.header} container-fluid`}>
            <div className="row">
                <div data-aos="zoom-in" className={`${styles.header_text} col-md-5 offset-md-1 offset-sm-1`}>
                    <h1>We Help Power Millions of Business in 100+
                        <br/>Countries.
                    </h1>
                    <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repudiandae saepe fugiat. Doloribus, nulla dolor? Ratione nam quia minus distinctio.</p>
                    <button className={styles.btn_learn}>Learn More</button>
                </div>
                <div data-aos="zoom-in" className="col-md-5 offset-md-1 mt-5">
                    <img className={`${styles.header_image} img-fluid mt-5`} src={headerImage} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Header;