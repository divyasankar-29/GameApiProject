import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <div className="heading">
          <p> Get Started With Your Favourite Game!</p>
          </div>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/signup">Sign Up</Link>
        </div >

      </div>
    );
  }

};

export default Header;