import React, { useState } from 'react';
import styles from './UserOrder.module.css';
import { MdDashboard } from 'react-icons/md';
import { MdRateReview } from 'react-icons/md';
import { IoIosCreate } from 'react-icons/io';
import { VscPreview } from 'react-icons/vsc';
import { BsCardList } from 'react-icons/bs';



const UserOrder = () => {
    const [active, setActive] = useState(1);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className={`${styles.orders_menu_container} col-md-3 mt-5`}>
                    <div className={`${styles.orders_menu} mt-5`}>
                        <ul className="">
                            <li className="p-3"><MdDashboard className={styles.icons}></MdDashboard><a className={styles.user_menu} onClick={() => setActive(1)}>Dashboard</a></li>

                            <li className="p-3"><BsCardList className={styles.icons}></BsCardList><a className={styles.user_menu} onClick={() => setActive(2)}>Your Orders</a></li>

                            <li className="p-3"><IoIosCreate className={styles.icons}></IoIosCreate><a className={styles.user_menu} onClick={() => setActive(3)}>Make Order</a></li>

                            <li className="p-3"><MdRateReview className={styles.icons}></MdRateReview><a className={styles.user_menu} onClick={() => setActive(4)}>Reviews</a></li>

                            <li className="p-3"><VscPreview className={styles.icons}></VscPreview><a className={styles.user_menu} onClick={() => setActive(5)}>Make Review</a></li>

                        </ul>
                    </div>
                </div>
                <div className="col-md-9 mt-5">
                    <div>
                        {active == 1 && <h1>Comming Soon</h1>}
                    </div>
                    <div>
                        {active == 2 && <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>}
                    </div>
                    <div>
                        {active == 3 && <h3>Make Order</h3>}
                    </div>
                    <div>
                        {active == 4 && <h3>Your Reviews</h3>}
                    </div>
                    <div>
                        {active == 5 && <h3>Make Reviews</h3>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserOrder;