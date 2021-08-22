import React from 'react';
import styles from './ServiceStyle.module.css';

const ServicesStyle = (props) => {
    const {id, name, img} = props.service;
    return (
        <div className={`${styles.service_item} col-md-3 offset-md-1 mt-5 p-4`}>
            <img src={img} alt=""/>
            <h5 className="mt-4">{name}</h5>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
    );
};

export default ServicesStyle;