import Layout from "@/layout/Layout";
import Login from "@/page/auth/Login";
import RegisterScreen from "@/page/auth/RegisterScreen";

import { createBrowserRouter } from "react-router-dom";

export const mainRouter = createBrowserRouter([
  {
    path: "/auth",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <RegisterScreen />,
        path: "register",
      },
      {
        index: true,
        element: <Login />,
        path: "login ",
      },
    ],
  },
]);
