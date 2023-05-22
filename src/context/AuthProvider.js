import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({
    email: "guest@gmail.com",
    name: "guest",
    password: "guest",
  });

  const handleLogin = (inputData) => {
    console.log(
      "handle login called",
      inputData.email === "guest@gmail.com" && inputData.password === "guest",
      inputData
    );
    const validId =
      inputData.email === "guest@gmail.com" && inputData.password === "guest";
    setIsLoggedIn(validId);
    navigate(location?.state?.from?.pathname);
  };
  const logoutUser = () => {
    setIsLoggedIn(false);
  };
  return (
    <authContext.Provider
      value={{ loggedIn, loggedInUser, handleLogin, logoutUser }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
