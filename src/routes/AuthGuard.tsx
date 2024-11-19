import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthGuard = () => {
  const isAuthenticated = localStorage.getItem("token");
  const location = useLocation();

  if (location.pathname === "/column") {
    return <Outlet />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
