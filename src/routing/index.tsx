import { useRoutes } from "react-router-dom";

import AuthRoute from "./AuthRoute";
import MainRoute from "./MainRoute";

export default function ThemeRoutes() {
  const token = true
  let routes = [];
  routes = token ? MainRoute : AuthRoute;
  return useRoutes(routes);
}
