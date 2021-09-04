import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // const [storage, setStorage] = useState({});
  // console.log('storage', storage);

  // useEffect(() => {
  //   var userEmail = JSON.parse(localStorage.getItem('email'));
  //   console.log('private', userEmail);
  //   setStorage(userEmail);
  // }, []);


  return (
    <Route
      {...rest}
      render={({ location }) =>
        (loggedInUser.email || sessionStorage.getItem('token')) ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
};

export default PrivateRoute;