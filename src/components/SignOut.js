import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function SignOut(){ 

    const nav = useNavigate();

    const handleClick=()=>{
        //localStorage.clear();
        // setLogin(false);
        nav("/");
    }

    return(
        <div>
            <Button variant="contained" onClick={handleClick}>SignOut</Button>
        </div>
    )
}
export default SignOut