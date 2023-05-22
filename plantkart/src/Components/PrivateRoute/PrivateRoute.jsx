import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import { Navigate, useLocation } from "react-router";

// export const privateRoute = ({ children }) => {
//   const { token } = useContext(AuthContext);
//   const location = useLocation();
//   return token ? (
//     children
//   ) : (
//     <Navigate to="/login" state={{ from: location?.pathname }} replace />
//   );
// };
export const PrivateRoute = ({ children }) => {
    const { token } = useContext(AuthContext);
    const location = useLocation();
  
    return token ? children : <Navigate replace to='/login' state={{ from: location }}/>
  }