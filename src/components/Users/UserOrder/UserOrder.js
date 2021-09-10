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
import { AiFillDelete } from 'react-icons/ai';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';



const UserOrder = (props) => {


    const serviceId = props.id;
    const email = sessionStorage.getItem('email');
    const name = sessionStorage.getItem('name');
    const token = sessionStorage.getItem('token');

    const [success, setSuccess] = useState('');

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
        fetch('https://nameless-crag-62193.herokuapp.com/user/addOrder', {
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
        const formData = new FormData();
        formData.append('imgR', data2.imgR[0]);
        formData.append('nameR', data2.nameR);
        formData.append('emailR', data2.emailR);
        formData.append('review', data2.review);

        fetch('https://nameless-crag-62193.herokuapp.com/user/addReview', {
            method: 'POST',
            body: formData,
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            // body: JSON.stringify(data2)
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
        fetch('https://nameless-crag-62193.herokuapp.com/user/showAllOrders?email=' + (loggedInUser.email || email), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setUserOrder(data));
    }, [userOrder]);

    //showing users posted reviews by email
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://nameless-crag-62193.herokuapp.com/user/showReview?email=' + (loggedInUser.email || email))
            .then(res => res.json())
            .then(data => setReview(data));
    }, [review]);

    //deleting order of user
    const handleDelete = (id) => {
        // console.log('deleted', id);
        fetch(`https://nameless-crag-62193.herokuapp.com/user/deleteOrder/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                setSuccess('Deleted Successfully');
            })
    };

    //deleting review from user id
    const handleDeleteReview = (id) => {
        fetch(`https://nameless-crag-62193.herokuapp.com/user/deleteReview/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => console.log(result));
    }

    // console.log(watch("example"));

    const [active, setActive] = useState("dashboard");

    const data2 = [
        { quarter: 'Total Orders', earnings: userOrder.length },
        { quarter: 'Total Reviews', earnings: review.length }
    ];

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
                        {active == "dashboard" &&
                            <div className="w-50 m-auto">
                                <h3 className={`${styles.makeOrder_header} m-3`}>Your Total Orders And Reviews</h3>
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
                        {active == "yourOrder" &&
                            <div>
                                <h3 className={`${styles.makeOrder_header} m-3`}>Your Order Lists</h3>
                                <p>{success}</p>
                                <table class="table table-sm table-bordered text-center">
                                    <thead>
                                        <tr>
                                            <th className={styles.theader} scope="col">Order Name</th>
                                            <th scope="col">Descrition</th>
                                            <th scope="col">Order Maker Name</th>
                                            <th scope="col">Owner Email</th>
                                            <th scope="col">Owner Phone</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userOrder.map(order => <tr>
                                            <td>{order.orderName}</td>
                                            <td>{order.description}</td>
                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.phone}</td>
                                            <td onClick={() => handleDelete(order._id)} className={styles.delete_icon}><AiFillDelete></AiFillDelete></td>
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
                                        <input name="email" value={loggedInUser.email || email} className={`${styles.input_item} py-3`} placeholder="Your Email" type="text" {...register("email", { required: true })} />
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
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {review.map(rv => <tr>
                                            <td>{rv.nameR}</td>
                                            <td>{rv.review}</td>
                                            <td>{rv.emailR}</td>
                                            <td onClick={() => handleDeleteReview(rv._id)} className={styles.delete_icon}><AiFillDelete></AiFillDelete></td>
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
                                <form onSubmit={handleSubmit2(onSubmitReviews)} encType="multipart/form-data">

                                    <div className="m-3">
                                        <label htmlFor="nameR">Your Name</label>
                                        <br />
                                        <input name="nameR" value={loggedInUser.displayName || name} className={`${styles.input_item} py-3`} placeholder="Your Name" type="text" {...register2("nameR", { required: true })} />
                                        <br />
                                        {errors2.nameR && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className="m-3">
                                        <label htmlFor="emailR">Your Email</label>
                                        <br />
                                        <input name="emailR" value={loggedInUser.email || email} className={`${styles.input_item} py-3`} placeholder="Your Email" type="email" {...register2("emailR", { required: true })} />
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

                                    <div className="m-3">
                                        <label htmlFor="imgR">Your Photo</label>
                                        <br />
                                        <input name="imgR" type="file" {...register2("imgR", { required: true })} />
                                        <br />
                                        {errors2.imgR && <span className="text-danger">This field is required</span>}
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