import React, { useContext } from "react";
import { authContext } from "../context/AuthProvider";

import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { loggedIn } = useContext(authContext);
  const location = useLocation();
  return loggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoutes;
