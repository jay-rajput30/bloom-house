import React, { useContext, useState } from "react";
import "./index.css";
import { authContext } from "../../context/AuthProvider";
import { useLocation, useNavigate, Link } from "react-router-dom";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleLogin, setIsLoggedIn } = useContext(authContext);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const guestLoginHandler = (e) => {
    console.log("guest click handler called");
    setIsLoggedIn(true);
    navigate(location?.state?.from?.pathname);
  };
  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <div className="login-form-item">
          <label htmlFor="email">email: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={userCredentials.email}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="login-form-item">
          <label htmlFor="password">password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userCredentials.password}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="login-form-item-buttons">
          <button
            onClick={() => {
              handleLogin({
                email: userCredentials.email,
                password: userCredentials.password,
              });
            }}
          >
            login
          </button>
          <button onClick={guestLoginHandler}>login as guest</button>
        </div>
      </form>
      <div className="login-form-item-link">
        <p>
          No signed up yet? click <Link to="/signup">here</Link> to sign up
        </p>
      </div>
    </div>
  );
};

export default Login;
