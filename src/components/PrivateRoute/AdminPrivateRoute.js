import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../App';

const AdminPrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser, adminLoggedIn, setAdminLoggedIn] = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        (adminLoggedIn.adminEmail || sessionStorage.getItem('adminToken')) ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/adminLogin",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
};

export default AdminPrivateRoute;