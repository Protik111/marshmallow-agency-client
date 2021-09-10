import React, { useContext } from 'react';
import userlogo from '../../../images/logos/logo-dark.png';
import styles from './AdminHeader.module.css';
import { BiLogOut } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';

const AdminHeader = () => {
    const [adminLoggedIn, setAdminLoggedIn] = useContext(UserContext);
    const handleLogOut = () => {
        setAdminLoggedIn({});
        sessionStorage.removeItem('adminToken');
        sessionStorage.removeItem('adminName');
    }
    return (
        <div className={`${styles.dashboard_nav} container-fluid`}>
            <div className="row">
                <div className={`${styles.user_logo} col-md-1 offset-md-1 mt-4 text-center`}>
                    <Link to="/home">
                        <img src={userlogo} alt="" />
                    </Link>
                </div>
                <div className="col-md-5 offset-md-5 mt-4">
                    <div className={`${styles.welcome} text-center`}>
                        <h4 className={`${styles.name}`}>{(adminLoggedIn.adminName || sessionStorage.getItem('adminName'))}</h4>
                        <NavLink to="/adminLogin">
                            <button onClick={handleLogOut} className={styles.log_out_btn}><BiLogOut className={styles.log_out_icon}></BiLogOut>Log Out</button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h3 className={`${styles.welcome2}`}>Welcome To Admin Dashboard</h3>
            </div>
            <hr className={styles.headline} />
        </div>
    );
};

export default AdminHeader;