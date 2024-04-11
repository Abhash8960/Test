import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Login = lazy(() => import("@pages/auth/Login"));
const Register = lazy(() => import("@pages/auth/Register"));
const Forget = lazy(() => import("@pages/auth/Forget"));

const AuthRoute = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forget",
    element: <Forget />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default AuthRoute;
