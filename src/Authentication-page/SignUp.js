import React from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  let navigate = useNavigate();
  function handleSignUp() {
    navigate("/authentication-page");
  }

  return (
    <>
      <div className="amazon">amazon.in</div>
      <div className="SignIn-container">
        <div className="SignIn">
          <div className="sign">Create account</div>

          <div className="email-text">your name </div>
          <input className="form"></input>

          <div className="email-text">Mobile number or email </div>
          <input className="form"></input>

          <div className="email-text">Password</div>
          <input className="form" placeholder="At least 6 character"></input>
        </div>

        <div className="password-text">password again</div>
        <input className="form"></input>

        <button className="continue-btn" type="button" onClick={handleSignUp}>
          Continue
        </button>

        <div className="privacy-text">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </div>

        <div className="b-account">
          Already have an account? Sign in Buying for work? Create a free
          business account
        </div>
      </div>
    </>
  );
}

export default SignUp;
