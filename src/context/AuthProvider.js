import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../backend/db-connect";
import { checkLogin } from "../backend/controllers/login.controller";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({
    email: "guest@gmail.com",
    user_id: null,
    accessToken: null,
  });

  const handleLogin = async (inputData) => {
    try {
      let { data, success, error } = await checkLogin(inputData);

      if (success) {
        setIsLoggedIn(true);
        setLoggedInUser({
          ...loggedInUser,
          user_id: data.user.id,
          email: data.user.email,
          accessToken: data.session.access_token,
        });
        localStorage.setItem(
          "user",
          JSON.stringify({
            user_id: data.user.id,
            email: data.user.email,
            accessToken: data.session.access_token,
          })
        );
        navigate(location?.state?.from?.pathname);
      }
    } catch (e) {
      console.error({ error: e.message });
    }
  };
  const logoutUser = () => {
    setIsLoggedIn(false);
  };

  return (
    <authContext.Provider
      value={{ loggedIn, setIsLoggedIn, loggedInUser, handleLogin, logoutUser }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
