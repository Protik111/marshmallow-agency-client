import React from 'react';
import styles from './Footer.module.css';
import { AiFillGithub, AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { DiStackoverflow } from 'react-icons/di';

const Footer = () => {
    return (
        <div className={`${styles.footer} container-fluid mt-5`}>
            <div className="row">
                <div className="col-md-4 mt-5 text-center py-4">
                    <p> 164, Castle Road 441</p>
                    <p>District South Canada</p>
                    <p>+008 111 222 333</p>
                    <p>+008 111 222 333</p>
                    <h5>Social Share</h5>
                    <div className={styles.icons}>
                        <AiFillGithub></AiFillGithub>
                        <AiFillFacebook className={styles.icon_item}></AiFillFacebook>
                        <AiOutlineTwitter className={styles.icon_item}></AiOutlineTwitter>
                        <DiStackoverflow className={styles.icon_item}></DiStackoverflow>
                    </div>
                </div>
                <div className={`${styles.footer_text} col-md-8 mt-5 py-4`}>
                    <div className="mx-auto">
                        <h5>Get News</h5>
                        <p>Home</p>
                        <p>About</p>
                        <p>Services</p>
                        <p>Portfolio</p>
                        <p>Contact</p>
                    </div>
                    <div className="mx-auto">
                        <h5>Product</h5>
                        <p>Digital Marketing</p>
                        <p>Web Development</p>
                        <p>App Develoment</p>
                        <p>Design</p>
                    </div>
                    <div className="mx-auto">
                        <h5>Company</h5>
                        <p>Partners</p>
                        <p>Investors</p>
                        <p>Visitor</p>
                        <p>FAQ</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;