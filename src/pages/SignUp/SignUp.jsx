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
    firstName: "",
    lastName: "",
    phoneNo: null,
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
          firstName: signupDetails.firstName,
          lastName: signupDetails.lastName,
          phoneNo: signupDetails.phoneNo,
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
          firstName: "",
          lastName: "",
          phoneNo: null,
          email: "",
          password: "",
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
          type="text"
          name="firstName"
          item={signupDetails.firstName}
          text="First Name"
        />
        <SingUpFormItem
          inputChangeHandler={inputChangeHandler}
          type="text"
          name="lastName"
          item={signupDetails.lastName}
          text="Last Name"
        />
        <SingUpFormItem
          inputChangeHandler={inputChangeHandler}
          type="number"
          name="phoneNo"
          item={signupDetails.phoneNo}
          text="Phone No"
        />
        <SingUpFormItem
          inputChangeHandler={inputChangeHandler}
          type="email"
          name="email"
          item={signupDetails.email}
          text="Email"
        />

        <SingUpFormItem
          inputChangeHandler={inputChangeHandler}
          type="password"
          name="password"
          item={signupDetails.password}
          text="Password"
        />

        <div className="signup-form-item-buttons">
          <button onClick={formBtnClickHandler}>signup</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
