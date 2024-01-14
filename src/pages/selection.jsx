import React from "react";
import "../style/selection.css";
import { Link } from "react-router-dom";
const Selection = () => {
  return (
    <div className="main-login">
      <h1>Stack</h1>
      <div className="selection-inner">
        <h1>Stack</h1>
        <p>FAST | SECURE | SCALABLE</p>
        <p></p>
        <div className="button-duv-5">
          <Link to="/registration" className="linktag">
           
            <div className="register-button selection-button">
              <p>Register</p>
            </div>
          </Link>
          <Link to={"/login"} className="linktag">
         
            <div className="login-button selection-button">
              <p>Login</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Selection;
