import React from 'react';
import logo from '../../../images/logos/logo-light.svg';
import styles from '../Navbar/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.overlay}>
            <nav>
            <div className={styles.img_box}>
                <img src={logo} alt=""/>
            </div>
            <input type="checkbox" name="" id="menu-check" className={styles.menu_check}/>
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
                <li><a className={styles.admin_btn} href="">Admin</a></li>
            </ul>
            </nav>
        </div>
    );
};

export default Navbar;