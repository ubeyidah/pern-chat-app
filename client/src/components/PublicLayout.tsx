import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/AuthStore";

const PublicLayout = () => {
  const { user } = useAuth();
  if (!user) {
    return <Outlet />;
  }
  return <Navigate replace to="/chat" />;
};
export default PublicLayout;
