import React from 'react';
import logo from '../../../images/logos/logo-light.svg';
import styles from '../Navbar/Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.overlay}>
            <nav className={styles.nav}>
                <div className={styles.img_box}>
                    <img src={logo} alt="" />
                </div>
                <input type="checkbox" name="" id="menu-check" className={styles.menu_check} />
                <label for="menu-check" class={styles.hamberger}>
                    <i className="fas fa-bars"></i>
                </label>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#plans">Plans</a></li>
                    <NavLink to="/adminDashboard" className={styles.adminBtn}>
                        <li><a className={styles.admin_btn} href="#admin">Admin</a></li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;