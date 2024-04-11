import { Navigate } from "react-router-dom";
import Dashboard from "@pages/main/Dashboard";
import Businesses from "@pages/main/Businesses";
import SupportAgent from "@pages/main/SupportAgent";
import Leads from "@pages/main/Leads";
import SalesAgent from "@pages/main/SalesAgent";
import Clients from "@pages/main/Clients";
import PlansOffers from "@pages/main/PlansOffers";
import Reporting from "@pages/main/Reporting";



const MainRoute = [
  {path: "/dashboard",element: <Dashboard />},
  {path: "/businesses",element: <Businesses />},
  {path: "/support-agents",element: <SupportAgent />},
  {path: "/leads",element: <Leads />},
  {path: "/sales-agents",element: <SalesAgent />},
  {path: "/clients",element: <Clients />},
  {path: "/plans-and-offers",element: <PlansOffers />},
  {path: "/reporting",element: <Reporting />},
  {path: "*",element: <Navigate to="/dashboard" replace />},
];

export default MainRoute;
