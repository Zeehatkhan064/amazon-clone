import React from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

function SignIn() {
  let navigate = useNavigate();
  function handleSignIn() {
    navigate("/sign-up");
  }

  return (
    <>
      <div className="amazon">amazon.in</div>
      <div className="SignIn-container">
        <div className="SignIn">
          <div className="sign">Sign In</div>

          <div className="email-text">Email or mobile phone number </div>
          <input className="form"></input>
        </div>
        <button className="continue-btn" type="button">
          Continue
        </button>

        <div className="privacy-text">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </div>

        <div className="need">Need Help?</div>
      </div>

      <div className="new-account">
        <div className="new">New to Amazon</div>

        <button className="create-btn" type="button" onClick={handleSignIn}>
          Create your Amazon account
        </button>
      </div>
    </>
  );
}

export default SignIn;
