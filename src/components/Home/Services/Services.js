import React from 'react';
import servicesData from '../../Datas/ServicesData.json';
import ServicesStyle from '../ServicesStyle/ServicesStyle';
import styles from './Services.module.css';

const Services = () => {
    return (
        <div className="container-fluid row" id="services">
            <div className="offset-md-1 offset-sm-1 mt-5">
                <h5>We're Offering</h5>
                <h1>Creative Digital Agency</h1>
            </div>
            <div className={`${styles.service_container} container row mt-5 mb-5`}>
                {servicesData.map((service) => <ServicesStyle service={service}></ServicesStyle>)}
            </div>
        </div>
    );
};

export default Services;