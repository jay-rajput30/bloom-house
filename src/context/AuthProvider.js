import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../backend/db-connect";

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
  // "id", "username", "email"
  const handleLogin = async (inputData) => {
    try {
      let { data: user, error } = await supabase
        .from("users")
        .select("id, username, email")
        .eq("password", inputData.password);
      if (!error) {
        setIsLoggedIn(true);
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
