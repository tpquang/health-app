import { RouteObject, Navigate } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import NotFound from "../pages/NotFound";
import AuthGuard from "./AuthGuard";
import Column from "../pages/column";
import TopPage from "../pages/topPage";
import MyRecord from "../pages/myRecord";

export const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/top-page" replace />,
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      document.title = "Login";
      return null;
    },
  },
  {
    element: <AuthGuard />,
    children: [
      {
        path: "/column",
        element: <Column />,
        loader: () => {
          document.title = "Column";
          return null;
        },
      },
      {
        path: "/top-page",
        element: <TopPage />,
        loader: () => {
          document.title = "Top Page";
          return null;
        },
      },
      {
        path: "/my-record",
        element: <MyRecord />,
        loader: () => {
          document.title = "My Record";
          return null;
        },
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
    loader: () => {
      document.title = "Not Found";
      return null;
    },
  },
];
