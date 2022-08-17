import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = "1055710802424-gsvuc291j0lopunlq8io2u3mqv8fn7p1.apps.googleusercontent.com";

function Logout(){

    const onSuccess = () =>{
        console.log("Logout Successful")
    }

    return(
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}
export default Logout