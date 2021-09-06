import React, { useEffect, useState } from "react";
import styles from './Customer.module.css';
import CustomerSlider from "../CustomerSlider/CustomerSlider";

//aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const Customer = () => {
    // const { id, nameR, imgR, review } = props.review;
    //inserting bulk reviewData
    // const handleBulkReview = () => {
    //     fetch('http://localhost:5000/user/addBulkReview', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(reviewData)
    //     })
    // }

    const [reviews, setReviews] = useState([]);

    //showing all revies in homepage
    useEffect(() => {
        fetch('http://localhost:5000/user/showAllReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className={`${styles.tesimonial_container} mt-5 mb-5 p-5 container-fluid`}>
                <div data-aos="fade-up" className="text-center mt-4 mb-5">
                    <h1 className={styles.heading}>Our Customers' Reviews</h1>
                </div>
                <div data-aos="zoom-in" className={`${styles.reviews_container} row`}>
                        {
                            reviews.map((review) => <CustomerSlider key={review.id} review={review}></CustomerSlider>)
                        }
                </div>
            </div>
    );
};

export default Customer;