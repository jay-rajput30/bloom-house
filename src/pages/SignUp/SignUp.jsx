import React, { useState } from "react";
import "./index.css";

//TODO: 1. STORE INPUT VALUE IN STATE, ADD BACKEND QUERY TO ADD USER, CREATE NEW WISHLIST AND CART WITH SAME USER ID

const SignUp = () => {
  const [signupDetails, setSignUpDetails] = useState({
    email: null,
    password: null,
    confirmPassword: null,
  });
  return (
    <div className="signup-wrapper">
      <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
        <div className="signup-form-item">
          <label htmlFor="email">email: </label>
          <input
            type="text"
            id="email"
            name="email"
            // value={userCredentials.email}
            // onChange={inputChangeHandler}
          />
        </div>
        <div className="signup-form-item">
          <label htmlFor="password">password: </label>
          <input
            type="password"
            id="password"
            name="password"
            // value={userCredentials.password}
            // onChange={inputChangeHandler}
          />
        </div>
        <div className="signup-form-item">
          <label htmlFor="confirm-password">Confirm password: </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            // value={userCredentials.password}
            // onChange={inputChangeHandler}
          />
        </div>
        <div className="signup-form-item-buttons">
          <button
          // onClick={() => {
          //   handleLogin({
          //     email: userCredentials.email,
          //     password: userCredentials.password,
          //   });
          // }}
          >
            signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
