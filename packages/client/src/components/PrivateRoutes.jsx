import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AccountContext } from "./AccountContext";

const useAuth = () => {
  // We can use the context hook as the PrivateRoutes component is a child of the UserContext component in App.js under the Views.
  const { user } = useContext(AccountContext);
  return user && user.loggedIn;
};

const PrivateRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
