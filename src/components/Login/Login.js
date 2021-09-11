//import { faGoogle } from "@fortawesome/free-brands-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import logo from '../../images/Screenshot 2021-09-06 160848.png';
import firebaseConfig from './firebase.config';


const Login = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
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
        // const googleProvider = new firebase.auth.GoogleAuthProvider();
        // firebase.auth()
        //     .signInWithPopup(googleProvider)
        //     .then(result => {
        //         const { displayName, email, photoURL } = result.user;
        //         const signedInUser = { name: displayName, email, photoURL }
        //         setLoggedInUser(signedInUser);
        //         history.replace(from)
//<FontAwesomeIcon icon={faGoogle} />
        //     })
        //     .catch(error => {
        //         var errorMessage = error.message;
        //         console.log(errorMessage)
        //     });
    }
    return (
        <div className="sign-in vh-100">
            <div className="sign-in-style">
            <img src={logo} style={{ height: '80px' }} className="img-fluid rounded mb-5" alt="logo" />
            <br />
            <h4>Sign In</h4>
            <button onClick={handleSignIn} className="btn custom-btn-bg"> Sign in with Google</button>
        </div>
        </div>
    );
};

export default Login;