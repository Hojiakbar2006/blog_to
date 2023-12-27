import { Navigate, Outlet } from "react-router-dom";
export default function PrivateRout() {
  const auth_token = localStorage.getItem("access_token", false);
  return auth_token ? <Outlet /> : <Navigate to="/authorisation/login" />;
}
