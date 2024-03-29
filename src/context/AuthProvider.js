import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../backend/db-connect";
import { checkLogin } from "../backend/controllers/login.controller";
import { toast } from "react-toastify";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartToggle, setCartToggle] = useState(false);
  const [wishlistToggle, setWishlistToggle] = useState(false);
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
        toast.success("welcome! your are now logged in", {
          position: toast.BOTTOM_CENTER,
          theme: "colored",
          autoClose: 1000,
        });
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
    toast.success("logged out successfully", {
      position: toast.BOTTOM_CENTER,
      theme: "colored",
      autoClose: 1000,
    });
    localStorage.removeItem("user");
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
        wishlistToggle,
        setWishlistToggle,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
