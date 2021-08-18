import React from 'react';
import logo from '../../../images/logos/logo-light.svg';
import styles from '../Navbar/Navbar.module.css'
const Navbar = () => {
    return (
        <div>
            <nav>
            <div className={styles.img_box}>
                <img src={logo} alt=""/>
            </div>
            <input type="checkbox" name="" id="menu-check" className={styles.menu_check}/>
            <label for="menu-check" class={styles.hamberger}>
                <i className="fas fa-bars"></i>
            </label>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Testimonials</a></li>
                <li><a href="">Plans</a></li>
                <li><a className={styles.admin_btn} href="">Admin</a></li>
            </ul>
            </nav>
        </div>
    );
};

export default Navbar;