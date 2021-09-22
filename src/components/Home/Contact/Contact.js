import React, { useEffect } from 'react';
import contact from '../../../images/logos/contact.jpg';
import styles from './Contact.module.css';
//Animations from AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div data-aos="fade-right" className="col-lg-6 col-sm-12 col-md-6 mt-4 text-center">
                    <div>
                        <img src={contact} alt=""/>
                    </div>
                </div>
                <div data-aos="fade-left" className="col-lg-6 col-sm-12 col-md-6 mt-4">
                    <div className="text-center">
                        <h1>Got A Problem?</h1>
                        <h5 className="m-2">We are here to help you!</h5>
                    </div>
                    <div className="mt-4">
                        <form action="">
                            <div className={`${styles.contact_input}`}>
                                <div className={styles.form_group}>
                                    <input type="text" className={`${styles.form_input} py-3`} placeholder="Enter Your Name" id="name" required/>
                                    <label htmlFor="name" className={styles.form_label}>Name</label>
                                </div>
                                <div className={`${styles.form_group}`}>
                                    <input type="text" className={`${styles.form_input} py-3`} placeholder="Enter Email" id="email" required/>
                                    <label htmlFor="email" className={styles.form_label}>Email</label>
                                </div>
                            </div>
                            <div className={`${styles.contact_input}`}>
                                <div className={styles.form_group}>
                                    <input type="text" className={`${styles.form_input_message} py-5`} placeholder="Enter Your Message" id="message" required/>
                                    <label htmlFor="message" className={styles.form_label}>Message</label>
                                </div>
                            </div>
                            <div className={`${styles.see_more} mt-3 text-center`}>
                                <button type="button">Send Us</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;