import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-error">
      <h1>PAGE NOT FOUND</h1>
      <h3>The requested url is not found and it is invalid</h3>
      <Link to="/home">Click here to reach our home page</Link>
    </div>
  );
};
export default PageNotFound;