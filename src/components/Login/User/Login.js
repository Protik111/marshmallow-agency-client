import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './Login.module.css';
import { FcGoogle } from 'react-icons/fc';
import logoDark from '../../../images/logos/logo-dark.png';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


//initializing firebase app
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    //react router hooks
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [error, setError] = useState('');
    const [error2, setError2] = useState('');
    const [errors, setErrors] = useState('');
    const [errorSignup, setErrorSignup] = useState('');
    const [passStatus, setPassStatus] = useState('');



    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        displayName: '',
        email: '',
        password: '',
        password2: '',
        photo: '',
        success: false,
    });

    //google sign in
    const handleGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // const credential = result.credential;
                // const token = credential.accessToken;
                // const user = result.user;
                const { displayName, email, photoURL } = result.user;
                const newUserInfo = { displayName: displayName, email, photo: photoURL };
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
            });
    }

    //updating fullname
    const updateUserProfile = (name) => {
        console.log(name);
        const newUser = firebase.auth().currentUser;
        newUser.updateProfile({
            displayName: name,
        })
            .then(result => {
                console.log('Updated profile');
                console.log(result);
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    //login and sign up with password and email by firebase

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newUser && user.email && user.password && user.password === user.password2){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                // Signed in 
                const newUserInfo = { ...res.user };
                console.log(res);
                console.log('firstName', user.firstName, user.lastName);
                const name = user.firstName+ ' ' +user.lastName;
                newUserInfo.displayName = name;
                console.log(newUserInfo);
                setLoggedInUser(newUserInfo);
                setUser(newUserInfo);
                // console.log(user);
                // console.log(user.displayName);
                updateUserProfile(name);
                history.replace(from);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorSignup(errorMessage);
                console.log(errorSignup);
                // setUser.errors(errorMessage);
                // console.log(errorMessage);
                // ..
            });
        }
        if(newUser && user.password != user.password2){
            setPassStatus(`Password didn't matches!`);
        }

        //sign in with email and password
        if(!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                const newUserInfo = { ...userCredential.user };
                setLoggedInUser(newUserInfo);
                setUser(newUserInfo);
                history.replace(from);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrors(errorMessage);
                console.log(errors);
            });
        }
    }

    //error handling with input
    const handleChange = (e) => {
        if (e.target.name === 'email' || e.target.name === 'password' || e.target.name === 'firstName' || e.target.name === 'lastName' || e.target.name === 'password2') {
            if (e.target.value.length > 0) {
                setErrors('');
                setErrorSignup('');
            }
        }

        if (e.target.name === 'password') {
            const isNumberAndLength = e.target.value.length > 7 && /\d{1}/.test(e.target.value);
            // console.log(isNumberAndLength);
            if (!isNumberAndLength) {
                setError('Enter 8 characters & at least 1 number');
                // console.log(error);
            } else {
                setError('');
            }
            if (e.target.value.length < 1) {
                setError('');
            }
        }

        if (e.target.name === 'password2') {
            const isNumberAndLength = e.target.value.length > 7 && /\d{1}/.test(e.target.value);
            // console.log(isNumberAndLength);
            if (!isNumberAndLength) {
                setError2('Enter 8 characters & at least 1 number');
                // console.log(error);
            } else {
                setError2('');
            }
            if (e.target.value.length < 1) {
                setError2('');
            }
        }
    }

    //validating inputs email and password
    const handleBlur = (e) => {
        let isValid = true;
        if (e.target.name === 'email') {
            isValid = /\S+@\S+|.S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            let passLength = e.target.value.length > 7;
            let hasNumber = /\d{1}/.test(e.target.value);
            isValid = passLength && hasNumber;
        }
        if (isValid) {
            const userEntered = { ...user };
            userEntered[e.target.name] = e.target.value;
            setUser(userEntered);
        }
    }

    
    return (
        <div className={`${styles.login_container} container-fluid`}>
            <div className={`${styles.sign_in_box} text-center`}>
                <div className={`${styles.signin_logo}`}>
                    <img src={logoDark} alt="" />
                </div>
                <div>
                    <form action="" onSubmit={handleSubmit}>
                        {newUser && <div className="form_group">
                            <input name="firstName" onChange={handleChange} onBlur={handleBlur} className={`${styles.form_input}`} type="text" placeholder="First Name" required />
                        </div>}
                        {newUser && <div className="form_group">
                            <input name="lastName" onChange={handleChange} onBlur={handleBlur} className={`${styles.form_input}`} type="text" placeholder="Last Name" required />
                        </div>}
                        <div className="form_group">
                            <input name="email" onChange={handleChange} onBlur={handleBlur} className={`${styles.form_input}`} type="email" placeholder="Enter Email" required />
                        </div>
                        <div className="form_group">
                            <input name="password" onChange={handleChange} onBlur={handleBlur} className={`${styles.form_input}`} type="password" placeholder="Enter Password" required />
                            {newUser && <p className={styles.error_text}>{error}</p>}
                        </div>
                        {newUser && <div className="form_group">
                            <input name="password2" onChange={handleChange} onBlur={handleBlur} className={`${styles.form_input}`} type="password" placeholder="Confirm Password" required />
                            {newUser && <p className={styles.error_text}>{error2}</p>}
                        </div>}
                        <div className="text-center mt-2 mb-2">
                            <input className="common_button" type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
                        </div>

                        {/* showing errors */}

                        {!newUser && <p className={`${styles.error_text}`}>
                            {errors}
                        </p>}
                        {newUser && <p className={`${styles.error_text}`}>
                            {errorSignup}
                        </p>}
                        {newUser && <p className={`${styles.error_text}`}>
                            {passStatus}
                        </p>}
                    </form>
                </div>
                <div className={`${styles.signin_check} text-center mb-2`}>
                    <p>{newUser ? 'Already have an account?' : 'Are a New User?'}</p>
                    <input onClick={() => {
                        setNewUser(!newUser);
                        setErrors('');
                    }} className={styles.checkbox} type="checkbox" name="" id="login" />
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