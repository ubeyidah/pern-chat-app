import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/AuthStore";

const AuthLayout = () => {
  const { user } = useAuth();
  if (user) {
    return <Outlet />;
  }
  return <Navigate replace to="/signin" />;
};
export default AuthLayout;
