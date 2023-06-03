import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../backend/db-connect";
import { checkLogin } from "../backend/controllers/login.controller";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartToggle, setCartToggle] = useState(false);
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({
    email: "",
    user_id: null,
    accessToken: null,
  });

  const handleLogin = async (inputData) => {
    try {
      let { data, success, error } = await checkLogin(inputData);

      if (success) {
        setCartToggle((prev) => !prev);
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
      value={{
        loggedIn,
        setIsLoggedIn,
        setLoggedInUser,
        loggedInUser,
        handleLogin,
        logoutUser,
        cartToggle,
        setCartToggle,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
