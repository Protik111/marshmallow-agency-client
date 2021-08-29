import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import UserOrder from '../UserOrder/UserOrder';

const UserDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <UserOrder></UserOrder>
        </div>
    );
};

export default UserDashboard;