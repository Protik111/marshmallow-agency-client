import React, { useEffect, useState } from "react";
import styles from './Customer.module.css';
import CustomerSlider from "../CustomerSlider/CustomerSlider";
import revData from '../../Datas/ReviewData.json';

//aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Customer = () => {
    // const { id, nameR, imgR, review } = props.review;

    //inserting bulk reviewData
    // const handleBulkReview = () => {
    //     fetch('https://nameless-crag-62193.herokuapp.com/user/addBulkReview', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(revData)
    //     })
    // }

    const [reviews, setReviews] = useState([]);

    //showing all revies in homepage
    useEffect(() => {
        fetch('https://nameless-crag-62193.herokuapp.com/user/showAllReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
        console.log('revies', reviews);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const classes = useStyles();
    return (
        <div className={`${styles.tesimonial_container} mt-5 mb-5 p-5 container-fluid`}>
            <div data-aos="fade-up" className="text-center mt-4 mb-5">
                <h1 className={styles.heading}>Our Customers' Reviews</h1>
                {/* <button onClick={handleBulkReview}>ADd reveiw</button> */}
            </div>
            {reviews.length === 0 && <div className={classes.root}>
                <LinearProgress />
                <LinearProgress color="secondary" />
            </div>}
            <div data-aos="zoom-in" className={`${styles.reviews_container} row`}>
                {
                    reviews.map((review) => <CustomerSlider key={review.id} review={review}></CustomerSlider>)
                }
            </div>
        </div>
    );
};

export default Customer;