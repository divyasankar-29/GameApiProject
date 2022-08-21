import React, { useState } from "react";
import {GoogleLogin,GoogleLogout} from "react-google-login";
import { useNavigate } from "react-router-dom";

function Login({clientId,setGoogleLogin}){

    const [showLoginButton,setShowLoginButton] = useState(true);
    const [showLogoutButton,setShowLogoutButton] = useState(false);

    const navigate = useNavigate();
    const onLoginSuccess = (res) => {
        localStorage.setItem("token",res.accessToken)
        console.log("Login Success",res.profileObj);
        setGoogleLogin(true)
        setShowLoginButton(false)
        setShowLogoutButton(true)
        navigate("/home")

        
    }

    const onLoginFailure = (res) => {
        console.log("Login Failed",res.profileObj);
    }

    const onSignOutSuccess = (res) => {
        alert(`You have been signed out successfully`)
        setGoogleLogin(false);
        localStorage.removeItem("token");
        setShowLoginButton(true)
        setShowLogoutButton(false)
        navigate("/");
    }
    
    return(
        <div>
            {showLoginButton ? (
                <GoogleLogin
                clientId={clientId}
                buttonText="Sign in"
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
            ) : null}

            {showLogoutButton ? (
                 <GoogleLogout
                 clientId={clientId}
                 buttonText="Sign out"
                 onLogoutSuccess={onSignOutSuccess}
             />
            ) : null}
            
           
        </div>
    )
}

export default Login;
