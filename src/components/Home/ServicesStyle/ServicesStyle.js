import React from 'react';
import styles from './ServiceStyle.module.css';
import { NavLink } from 'react-router-dom';

const ServicesStyle = (props) => {
    const { id, name, img } = props.service;
    return (
        <div className="col-md-3 offset-md-1 mt-5">
            <NavLink to={`/userDashboard/${id}`} className={styles.link_Style}>
                <div className={`${styles.service_item} p-4 mt-5`}>
                    <img src={img} alt="" />
                    <h5 className="mt-4">{name}</h5>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </NavLink>
        </div>
    );
};

export default ServicesStyle;