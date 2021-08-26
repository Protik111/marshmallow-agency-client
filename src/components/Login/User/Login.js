import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './Login.module.css';
import { FcGoogle } from 'react-icons/fc';
import logoDark from '../../../images/logos/logo-dark.png';

//initializing firebase app
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [newUser, setNewUser] = useState(false);
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
                const { displayName, email, photoURL } = result.user;
                const newUserInfo = { name: displayName, email, photo: photoURL };
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
            <div className={`${styles.sign_in_box}`}>
                <div className={`${styles.signin_logo}`}>
                    <img src={logoDark} alt="" />
                </div>
                <div>
                    <form action="">
                        {newUser && <div className="form_group">
                            <input className={`${styles.form_input}`} type="text" placeholder="First Name" />
                        </div>}
                        {newUser && <div className="form_group">
                            <input className={`${styles.form_input}`} type="text" placeholder="Last Name" />
                        </div>}
                        <div className="form_group">
                            <input className={`${styles.form_input}`} type="text" placeholder="Enter Email" />
                        </div>
                        <div className="form_group">
                            <input className={`${styles.form_input}`} type="text" placeholder="Enter Password" />
                        </div>
                        {newUser && <div className="form_group">
                            <input className={`${styles.form_input}`} type="text" placeholder="Confirm Password" />
                        </div>}
                        <div className="text-center mt-2 mb-2">
                            <input className="common_button" type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
                        </div>
                    </form>
                </div>
                <div className={`${styles.signin_check} text-center mb-2`}>
                    <p>{newUser ? 'Already have an account?' : 'Are a New User?'}</p>
                    <input onClick={() => setNewUser(!newUser)} className={styles.checkbox} type="checkbox" name="" id="login" />
                    <label className={styles.label_text} htmlFor="login">{newUser ? 'Sign In' : 'Sign Up'}</label>
                </div>
                <div className="text-center">
                    <button className={`${styles.sign_in_button}`} onClick={handleGoogle}><FcGoogle className={styles.google_icon}></FcGoogle>Sign In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;