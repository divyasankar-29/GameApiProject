import React from "react";
import {GoogleLogin} from "react-google-login";

const clientId = "1055710802424-gsvuc291j0lopunlq8io2u3mqv8fn7p1.apps.googleusercontent.com";

const onSuccess = (res) =>{
    console.log("Login Success");
}

const onFailure = (res) =>{
    console.log("login failed");
}

function Login(){
    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText={"Sign in with Google"}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;
