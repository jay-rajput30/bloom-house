import React, { useContext, useState } from "react";
import "./index.css";
import { authContext } from "../../context/AuthProvider";
const Login = () => {
  const { handleLogin } = useContext(authContext);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
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
              console.log({ userCredentials });
              handleLogin({
                email: userCredentials.email,
                password: userCredentials.password,
              });
            }}
          >
            login
          </button>
          <button
            onClick={() =>
              handleLogin({
                password: "guest",
                email: "guest@gmail.com",
              })
            }
          >
            login as guest
          </button>
        </div>
      </form>
      {/* <p>login to continue</p> */}
    </div>
  );
};

export default Login;
