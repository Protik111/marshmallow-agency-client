import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import userlogo from '../../../images/logos/logo-dark.png';
import styles from './DashboardHeader.module.css';
import { BiLogOut } from 'react-icons/bi';
 
const DashboardHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className={`${styles.dashboard_nav} container-fluid`}>
            <div className="row">
                <div className={`${styles.user_logo} col-md-1 offset-md-1 mt-4 text-center`}>
                    <img src={userlogo} alt="" />
                </div>
                <div className="col-md-5 offset-md-5 mt-4">
                    <div className={`${styles.welcome}`}>
                        <h4>Welcome!</h4>
                        <h4 className={styles.name}>{loggedInUser.displayName}</h4>
                        <button onClick={() => setLoggedInUser({})} className={styles.log_out_btn}><BiLogOut className={styles.log_out_icon}></BiLogOut>Log Out</button>
                    </div>
                </div>
            </div>
            <hr className={styles.headline}/>
        </div>
    );
};

export default DashboardHeader;