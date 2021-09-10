import React, { useContext, useState, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../../App';
import { useHistory, useLocation, NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineHome } from 'react-icons/ai';
import logoDark from '../../../images/logos/logo-dark.png';
import firebaseConfig2 from './admin.firebase.config';
import styles from './AdminLogin.module.css';


const AdminLogin = () => {

    document.title='Admin - Login';

    //initializing firebase app
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig2);
    }
    const [loggedInUser, setLoggedInUser, adminLoggedIn, setAdminLoggedIn] = useContext(UserContext);

    //react router hooks
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [admin, setAdmin] = useState({
        adminName: '',
        adminEmail: '',
        adminPhoto: ''
    });


    //google sign in
    const handleGoogle2 = () => {
        const provider2 = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider2)
            .then((result) => {
                // const credential = result.credential;
                // const token = credential.accessToken;
                // const user = result.user;
                const { displayName, email, photoURL } = result.user;
                const newAdmin = { adminName: displayName, adminEmail: email, adminPhoto: photoURL };
                setAdmin(newAdmin);
                setAdminLoggedIn(newAdmin);
                // console.log(newAdmin);
                setUserToken();
                sessionStorage.setItem('adminName', newAdmin.adminName);
                history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
            });
    }

    //firebase verify jwt
    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('adminToken', idToken);
          }).catch(function(error) {
            // Handle error
          });
    }


    return (
        <div className={`${styles.login_container} container-fluid`}>
            <div className={`${styles.sign_in_box}`}>
                <div className={`${styles.signin_logo} mb-2`}>
                    <NavLink to="/home">
                        <img tooltip="Click To Go Home!" src={logoDark} alt="" />
                    </NavLink>
                </div>
                <div className="text-center mb-3">
                    <h5>Sign In As Admin</h5>
                    <p className={styles.note}>NB: Anyone can sign in as a admin <br/> for testing purpose.</p>
                </div>
                <div className={`${styles.sign_in_button_box} text-center`}>
                    <button className={`${styles.sign_in_button}`} onClick={handleGoogle2}><FcGoogle className={styles.google_icon}></FcGoogle>Sign In With Google</button>
                </div>
                <div className="text-center mt-3">
                    <NavLink to="/home">
                        <button className={`${styles.sign_in_button}`}><AiOutlineHome className={styles.google_icon}></AiOutlineHome>Back To Home</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;