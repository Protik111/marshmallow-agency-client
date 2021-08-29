import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const UserDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <h2>This is Dashboard{loggedInUser.displayName}</h2>
        </div>
    );
};

export default UserDashboard;