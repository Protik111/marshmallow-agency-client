import React from 'react';
import styles from './ServiceStyle.module.css';
import { NavLink } from 'react-router-dom';

const ServicesStyle = (props) => {
    const { id, name, img, description } = props.service;
    return (
        <div className="col-lg-3 col-sm-12 col-md-5 offset-md-1 mt-5">
            <NavLink to={`/userDashboard/${id}`} className={styles.link_Style}>
                <div className={`${styles.service_item} p-4 mt-5`}>
                    <img src={img} alt="" />
                    <h5 className="mt-4">{name}</h5>
                    <p className="mt-4">{description}</p>
                </div>
            </NavLink>
        </div>
    );
};

export default ServicesStyle;