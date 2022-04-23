import React from "react";
import logo from "./images/logo.png";
import icon from "./images/cart.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  function homeClick() {
    navigate("/home");
  }

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="nav-logo">
          <img className="logo" src={logo} alt="logo" onClick={homeClick} />
        </div>
      </div>

      <div className="hello">
        Hello
        <div className=" address">Select your address</div>
      </div>
      <div className="forms">
        <input className="form-control" placeholder="search"></input>
      </div>

      <div className="h-sign">
        Hello, Sign in
        <div className="account">Account & Lists</div>
      </div>

      <div className="return">
        Return
        <div className="order">& Order</div>
      </div>

      <div className="icon">
        <img className="c-icon" src={icon}></img>
      </div>
      <div className="cart">Cart </div>
    </div>
  );
}

export default Navbar;
