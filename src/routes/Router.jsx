import Main from "../Layout/Main";
import Home from "../pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path:"login",
        element: <Login></Login>
      },
    ],
  },
]);
