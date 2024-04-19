import { createBrowserRouter } from "react-router-dom";

import Register from "../pages/Register";
import Login from "../pages/Login";


import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";


export const routes = createBrowserRouter([

  {
    path: "/",
    element: <ProductsPage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
