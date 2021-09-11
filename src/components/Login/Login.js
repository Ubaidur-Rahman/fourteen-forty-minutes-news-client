import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from "react-router";
import { Link } from 'react-router-dom';
import { UserContext } from "../../App";
import logo from '../../images/Screenshot 2021-09-06 160848.png';
import firebaseConfig from './firebase.config';


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [newUser, setNewUser] = useState(false);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
        success: false,
    })

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    initializeApp(firebaseConfig)

    const handleSignIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, photoURL }
                setLoggedInUser(signedInUser);
                history.replace(from)

            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage)
            });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newUser && user.email && user.password) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = ''
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                });

        }
        if (!newUser && user.email && user.password) {

            const auth = getAuth();
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = ''
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                    const { displayName, email } = userCredential.user;
                    const signedInUser = { name: displayName, email }
                    setLoggedInUser(signedInUser);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                });
        }
    }


    const handleBlurChange = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'name') {
            isFieldValid = e.target.value;
        }
        if (e.target.name === 'email') {
            isFieldValid = (/\S+@\S+\.\S+/).test(e.target.value)
        }

        if (e.target.name === 'password') {
            isFieldValid = e.target.value.length >= 6 && /\d{1}/.test(e.target.value);
        }
        if (e.target.name === 'confirmPassword') {
            isFieldValid = e.target.value.length >= 6 && /\d{1}/.test(e.target.value);
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            console.log(newUserInfo);
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    return (

            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-sm-12 sign-in">
                    <div className="card sign-in-style my-3">
                    <img src={logo} style={{ height: '80px' }} className="img-fluid rounded" alt="logo" />
                        <div className="card-body">
                            {newUser && <h1 className="card-title">SignUp</h1>}
                            {!newUser && <h1 className="card-title">Login</h1>}

                            <form className="form-signIn" onSubmit={handleSubmit}>
                                <div className="form-label-group">
                                    {newUser && <input type="text" onChange={handleBlurChange} name="name" className="form-control" placeholder="Name" required autoFocus />}
                                </div>

                                <div className="form-label-group">
                                    <input type="text" onChange={handleBlurChange} name="email" className="form-control" placeholder="Email address" required autoFocus />
                                </div>
                                <div className="form-label-group">
                                    <input type="password" onChange={handleBlurChange} name="password" className="form-control" placeholder="Password" required />
                                    {newUser &&  <p className="text-danger text-center"><small> *password contains at least 6 character and 1 number</small></p>}
                                </div>
                                <div className="form-label-group">
                                    {newUser && <input type="password" onChange={handleBlurChange} name="confirmPassword" className="form-control" placeholder="Confirm Password" required />}
                                    {newUser && (user.password !== user.confirmPassword) && <p className="text-danger text-center">*password not matched</p>}
                                </div>

                                <div className="custom-control custom-checkbox mb-3 d-flex justify-content-between ">
                                    <div>
                                        <input type="checkbox" className="custom-control-input" />
                                        <label className="custom-control-label" > Remember Me</label>
                                    </div>
                                    <div>
                                        <a href="" >Forgot password</a>
                                    </div>
                                </div>
                                <p className="text-danger text-center">{user.error}</p>
                                {
                                    user.success && <p className="text-success text-center">User {newUser ? 'Created' : 'Signup'} Successfully Click Login button. </p>
                                }
                                {newUser && <input className="btn btn-primary text-uppercase w-100" type="submit" value="Signup"></input>}
                                {!newUser && <input className="btn btn-primary text-uppercase w-100" type="submit" value="Login"></input>}
                                {<div className="text-center">{!newUser && <p>Don't have an account?</p>}{newUser && <p>Already have an account?</p>} <Link onClick={(e) => { setNewUser(!newUser); e.preventDefault() }} href=""> {!newUser && <p>Create an account</p>}{newUser && <p>Login</p>}</Link></div>}

                                <hr className="my-2" />
                                <div className="text-center">
                                <button  onClick={handleSignIn} className="btn custom-btn-bg" ><FontAwesomeIcon icon={faGoogle} xl /> Sign in with Google </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default Login;