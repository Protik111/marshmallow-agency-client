import React, { useState, useContext, useEffect } from 'react';
import styles from './UserOrder.module.css';
import { MdDashboard } from 'react-icons/md';
import { MdRateReview } from 'react-icons/md';
import { IoIosCreate } from 'react-icons/io';
import { VscPreview } from 'react-icons/vsc';
import { BsCardList } from 'react-icons/bs';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
//fakedata
import datas from '../../Datas/ServicesData.json';


const UserOrder = (props) => {
    const serviceId = props.id;

    const [data, setData] = useState(datas);
    useEffect(() => {
        const selectedService = data.find(service => service.id === parseInt(serviceId));
        setData(selectedService);
    }, []);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { register: register2, handleSubmit: handleSubmit2, watch: watch2, formState: { errors: errors2 } } = useForm();

    const [status, setStatus] = useState('');
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/user/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Order done');
                }
            })
    };

    //posting a review
    const onSubmitReviews = data2 => {
        fetch('http://localhost:5000/user/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data2)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Review added');
                }
            })
    };
    //showing users made order
    const [userOrder, setUserOrder] = useState([]);
    const handleAllOrders = () => {
        setActive("yourOrder");
    }
    useEffect(() => {
        fetch('http://localhost:5000/user/showAllOrders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setUserOrder(data));
    }, []);

    //showing users posted reviews by email
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user/showReview?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setReview(data));
    }, []);

    console.log(watch("example"));

    const [active, setActive] = useState("dashboard");
    return (
        <div className="container-fluid">
            <div className="row">
                <div className={`${styles.orders_menu_container} col-md-3 mt-5`}>
                    <div className={`${styles.orders_menu} mt-5`}>
                        <ul className="">
                            <li className="p-3"><MdDashboard className={styles.icons}></MdDashboard><a className={styles.user_menu} onClick={() => setActive("dashboard")}>Dashboard</a></li>

                            <li className="p-3"><BsCardList className={styles.icons}></BsCardList><a className={styles.user_menu} onClick={handleAllOrders}>Your Orders</a></li>

                            <li className="p-3"><IoIosCreate className={styles.icons}></IoIosCreate><a className={styles.user_menu} onClick={() => setActive("makeOrder")}>Make Order</a></li>

                            <li className="p-3"><MdRateReview className={styles.icons}></MdRateReview><a className={styles.user_menu} onClick={() => setActive("yourReviews")}>Your Reviews</a></li>

                            <li className="p-3"><VscPreview className={styles.icons}></VscPreview><a className={styles.user_menu} onClick={() => setActive("makeReview")}>Post Review</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-9 mt-5 mb-5">
                    <div>
                        {active == "dashboard" && <h1>Dashboard Comming Soon</h1>}
                    </div>
                    <div className={styles.tableContainer}>
                        {active == "yourOrder" &&
                            <div>
                                <h3 className={`${styles.makeOrder_header} m-3`}>Your Order Lists</h3>
                                <table class="table table-sm table-bordered text-center">
                                    <thead>
                                        <tr>
                                            <th className={styles.theader} scope="col">Order Name</th>
                                            <th scope="col">Descrition</th>
                                            <th scope="col">Order Maker Name</th>
                                            <th scope="col">Owner Email</th>
                                            <th scope="col">Owner Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userOrder.map(order => <tr>
                                            <td>{order.orderName}</td>
                                            <td>{order.description}</td>
                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.phone}</td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
                    <div>
                        {active == "makeOrder" &&

                            <div>
                                <h3 className={`${styles.makeOrder_header} m-3`}>Make A Order</h3>
                                
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="m-3">
                                        <input name="name" className={`${styles.input_item} py-3`} placeholder="Your Name" type="text" {...register("name", { required: true })} />
                                        <br />
                                        {errors.name && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className="m-3">
                                        <input name="email" value={loggedInUser.email} className={`${styles.input_item} py-3`} placeholder="Your Email" type="text" {...register("email", { required: true })} />
                                        <br />
                                        {errors.email && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className="m-3">
                                        <input name="phone" className={`${styles.input_item} py-3`} placeholder="Phone Number" type="number" {...register("phone", { required: true })} />
                                        <br />
                                        {errors.phone && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className="m-3">
                                        <input name="orderName" value={data.name} className={`${styles.orderName} py-3`} placeholder="Order Name" type="text" {...register("orderName", { required: true })} />
                                        <br />
                                        {errors.orderName && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className={`${styles.description_input} m-3`}>
                                        <input name="description" className={`${styles.desciption_input_item} py-5`} placeholder="Write A Description" type="text" {...register("description", { required: true })} />
                                        <br />
                                        {errors.description && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className={`${styles.submitButton_container} m-3`}>
                                        <input className={styles.submitButton} type="submit" value="Make Order" />
                                    </div>
                                </form>
                            </div>
                        }
                    </div>
                    <div>
                        {active == "yourReviews" &&
                            <div>
                                <h3 className={`${styles.makeOrder_header} m-3`}>Your Posted Reviews</h3>
                                <table class="table table-sm table-bordered text-center">
                                    <thead>
                                        <tr>
                                            <th className={styles.theader} scope="col">Reviewer Name</th>
                                            <th scope="col">Your Review</th>
                                            <th scope="col">Your Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {review.map(rv => <tr>
                                            <td>{rv.nameR}</td>
                                            <td>{rv.review}</td>
                                            <td>{rv.emailR}</td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
                    <div>
                        {active == "makeReview" &&
                            <div>
                                <h3 className={`${styles.makeOrder_header} m-3`}>Give A Review</h3>
                                <form onSubmit={handleSubmit2(onSubmitReviews)}>

                                    <div className="m-3">
                                        <label htmlFor="nameR">Your Name</label>
                                        <br />
                                        <input name="nameR" value={loggedInUser.displayName} className={`${styles.input_item} py-3`} placeholder="Your Name" type="text" {...register2("nameR", { required: true })} />
                                        <br />
                                        {errors2.nameR && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className="m-3">
                                        <label htmlFor="emailR">Your Email</label>
                                        <br />
                                        <input name="emailR" value={loggedInUser.email} className={`${styles.input_item} py-3`} placeholder="Your Email" type="email" {...register2("emailR", { required: true })} />
                                        <br />
                                        {errors2.emailR && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className={`${styles.description_input} m-3`}>
                                        <label htmlFor="review">Your Review</label>
                                        <br />
                                        <input name="review" className={`${styles.desciption_input_item} py-5`} placeholder="Put Your Review" type="text" {...register2("review", { required: true })} />
                                        <br />
                                        {errors2.review && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className={`${styles.submitButton_container} m-3`}>
                                        <input className={styles.submitButton} type="submit" value="Send A Review" />
                                    </div>
                                </form>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserOrder;