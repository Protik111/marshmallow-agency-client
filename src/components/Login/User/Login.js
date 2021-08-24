import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './Login.module.css';

//initializing firebase app
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        name: '',
        email: '',
        photo: ''
    })
    const handleGoogle = () => {
        // console.log('clicked');
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                const {displayName, email, photoURL} = result.user;
                const newUserInfo = {name: displayName, email, photo: photoURL};
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    return (
        <div className={`${styles.login_container} container-fluid`}>
            <button onClick={handleGoogle}>Sign In With Google</button>
        </div>
    );
};

export default Login;