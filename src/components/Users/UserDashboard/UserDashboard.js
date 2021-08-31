import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import UserOrder from '../UserOrder/UserOrder';
import { useParams } from 'react-router-dom';

const UserDashboard = () => {
    const { serviceId } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <UserOrder id={serviceId}></UserOrder>
        </div>
    );
};

export default UserDashboard;