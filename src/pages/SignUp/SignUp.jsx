import React, { useContext, useState } from "react";
import "./index.css";
import { authContext } from "../../context/AuthProvider";
import { signUpUser } from "../../backend/controllers/login.controller";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../../backend/db-connect";
import { setLocalStorage } from "../../utils/utils";
import SingUpFormItem from "./SingUpFormItem";
//TODO: 1. STORE INPUT VALUE IN STATE, ADD BACKEND QUERY TO ADD USER, CREATE NEW WISHLIST AND CART WITH SAME USER ID

const SignUp = () => {
  const navigate = useNavigate();

  const { setLoggedInUser, setIsLoggedIn } = useContext(authContext);
  const [signupDetails, setSignUpDetails] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setSignUpDetails({ ...signupDetails, [name]: value });
  };

  const formBtnClickHandler = async () => {
    try {
      if (signupDetails.email || signupDetails.password) {
        let { data, success, error } = await signUpUser({
          email: signupDetails.email,
          password: signupDetails.password,
        });

        if (success) {
          setIsLoggedIn(true);
          setLoggedInUser({
            user_id: data.user.id,
            email: data.user.email,
            accessToken: data.session.access_token,
          });
          setLocalStorage({
            user_id: data.user.id,
            accessToken: data.session.access_token,
          });

          navigate("/");
        }

        setSignUpDetails({
          ...signupDetails,
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (e) {
      console.error({ e, mesage: e.message });
    }
  };

  return (
    <div className="signup-wrapper">
      <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
        <SingUpFormItem
          inputChangeHandler={inputChangeHandler}
          type="email"
          item={signupDetails.email}
        />

        <SingUpFormItem
          inputChangeHandler={inputChangeHandler}
          type="password"
          item={signupDetails.password}
        />

        <div className="signup-form-item-buttons">
          <button onClick={formBtnClickHandler}>signup</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
