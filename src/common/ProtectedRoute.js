
import jwt_decode from 'jwt-decode'
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const storage = window.localStorage;
  const token = storage.getItem('token');
  const decoded = token ? jwt_decode(token) : {};
  // console.log(decoded.exp);
  // console.log(Date.now() /1000);

  const isLoggedIn = decoded.exp > (Date.now() /1000);

  if (isLoggedIn) {
    return <Outlet />;
  }
  return <Navigate to={'/login'} />;
}
