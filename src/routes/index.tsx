import { RouteObject } from "react-router-dom";
import Layout from "../layouts/Layout";
import { mainRoutes } from "./MainRoutes";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [...mainRoutes],
  },
];
