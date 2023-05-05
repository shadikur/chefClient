import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="mx-auto w-60">
        <progress className="progress progress-info w-56"></progress>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return (
    <Navigate state={{ from: location }} to="/pages/login" replace></Navigate>
  );
};

export default PrivateRoute;
