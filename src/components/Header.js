
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Login from "./Login";

function Header({clientId,isLoggedIn,setLogin,googleLogin,setGoogleLogin}){

  const navigate = useNavigate();

  const handleClick=()=>{
    setLogin(false);
    //localStorage.removeItem("token");
    navigate('/');

  }
    return (
      <div className="header">
        <div className="heading">
          <p> Get Started With Your Favourite Game!</p>
          </div>
        <div className="nav">
          {isLoggedIn ?
          <Button variant = "contained" onClick={handleClick}>SignOut</Button>
           :
           <Link to="/">SignUp</Link> 
          
          
          }
          <Login clientId={clientId} setGoogleLogin={setGoogleLogin}/> 
        </div >
        
          
      </div>
    );
  }

export default Header;