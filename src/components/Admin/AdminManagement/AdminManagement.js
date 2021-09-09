import React, { useState, useEffect } from 'react';
import styles from '../../Users/UserOrder/UserOrder.module.css';
//icons import
import { MdDashboard } from 'react-icons/md';
import { MdRateReview } from 'react-icons/md';
import { IoIosCreate } from 'react-icons/io';
import { BsCardList } from 'react-icons/bs';
import { useForm } from "react-hook-form";
import styles1 from './AdminManagement.module.css';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';


const AdminManagement = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { register: register2, handleSubmit: handleSubmit2, watch: watch2, formState: { errors: errors2 } } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        fetch('http://localhost:5000/admin/makeService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Service added');
                }
            })
    }
    const [active, setActive] = useState("dashboard");

    const handleAllOrders = () => {
        console.log("handleAllOrders");
    }

    const [services, setServices] = useState([])
    //showing all services in admin dashboard
    useEffect(() => {
        fetch('http://localhost:5000/admin/showAllServices')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                // console.log(service);
            })
    }, []);

    const [reviews, setReviews] = useState([]);
    //showing all revies in admin dashboard
    useEffect(() => {
        fetch('http://localhost:5000/user/showAllReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const data2 = [
        { quarter: 'Total Services', earnings: services.length },
        { quarter: 'Customer Reviews', earnings: reviews.length }
    ];

    return (
        <div className="container-fluid">
            <div className="row">
                <div className={`${styles.orders_menu_container} col-md-3 mt-5`}>
                    <div className={`${styles.orders_menu} mt-5`}>
                        <ul className="">
                            <li className="p-3"><MdDashboard className={styles.icons}></MdDashboard><a className={styles.user_menu} onClick={() => setActive("dashboard")}>Dashboard</a></li>

                            <li className="p-3"><BsCardList className={styles.icons}></BsCardList><a className={styles.user_menu} onClick={() => setActive("youServices")}>Your Services</a></li>

                            <li className="p-3"><IoIosCreate className={styles.icons}></IoIosCreate><a className={styles.user_menu} onClick={() => setActive("makeService")}>Make Service</a></li>

                            <li className="p-3"><MdRateReview className={styles.icons}></MdRateReview><a className={styles.user_menu} onClick={() => setActive("allReviews")}>All Reviews</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-9 mt-5 mb-5">
                    <div>
                        {active == "dashboard" &&
                            <div className="w-50 m-auto">
                                <h3 className={`${styles.makeOrder_header} m-3`}>Total Services And Customer Review</h3>
                                <VictoryChart
                                    theme={VictoryTheme.material}
                                    domainPadding={{ x: 15 }}>
                                    <VictoryBar
                                        data={data2}
                                        // data accessor for x values
                                        x="quarter"
                                        // data accessor for y values
                                        y="earnings"
                                    />
                                </VictoryChart>
                            </div>
                        }
                    </div>
                    <div className={styles.tableContainer}>
                        {active == "youServices" &&
                            <div>
                                <h3 className={`${styles.makeOrder_header} m-3`}>Your All Services</h3>
                                <table class="table table-sm table-bordered text-center">
                                    <thead>
                                        <tr>
                                            <th className={styles.theader} scope="col">Service Name</th>
                                            <th scope="col">Descrition</th>
                                            <th scope="col">Image/Logo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {services.map(service => <tr>
                                            <td>{service.name}</td>
                                            <td>{service.description}</td>
                                            <td><img className={styles1.service_photo} src={service.img} alt="" /></td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
                    <div>
                        {active == "makeService" &&
                            <div>
                                <h3 className={`${styles.makeOrder_header} m-3`}>Make Another Service</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="m-3">
                                        <input name="name" className={`${styles.input_item} py-3`} placeholder="Service Name" type="text" {...register("name", { required: true })} />
                                        <br />
                                        {errors.name && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className={`${styles.description_input} m-3`}>
                                        <input name="description" className={`${styles.desciption_input_item} py-5`} placeholder="Write A Description" type="text" {...register("description", { required: true })} />
                                        <br />
                                        {errors.description && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className={`${styles.submitButton_container} m-3`}>
                                        <input className={styles.submitButton} type="submit" value="Make Service" />
                                    </div>
                                </form>
                            </div>
                        }
                    </div>
                    <div>
                        {active == "allReviews" &&
                            <div className={styles.tableContainer}>
                                <h3 className={`${styles.makeOrder_header} m-3`}>Clients' All Services</h3>
                                <table class="table table-sm table-bordered text-center">
                                    <thead>
                                        <tr>
                                            <th className={styles.theader} scope="col">Reviewer Name</th>
                                            <th scope="col">Descrition</th>
                                            <th scope="col">Photo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {reviews.map(review => <tr>
                                            <td>{review.nameR}</td>
                                            <td>{review.review}</td>
                                            <td><img className={styles1.reviewer_photo} src={review.imgR} alt="" /></td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminManagement;