import { createBrowserRouter, defer, redirect } from "react-router-dom";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";
import Sidebar from "./layouts/Sidebar/Sidebar";
import axios from "axios";
import { Product as ProductType } from "./types/product";
import { API_URL, ROUTE_PATH } from "./const";
import { lazy } from "react";
import Auth from "./layouts/Auth/Auth";
import Registration from "./pages/Registration/Registration";

const Product = lazy(() => import("./pages/Product/Product"));

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.Main,
    element: <Sidebar />,
    children: [
      {
        index: true,
        element: <Menu />,
      },
      {
        path: ROUTE_PATH.Cart,
        element: <Cart />,
      },
      {
        path: ROUTE_PATH.Product,
        element: <Product />,
        errorElement: <Error />,
        loader: async ({ params }) => {
          return defer({
            data: axios
              .get<ProductType[]>(`${API_URL}/products/${params.id}`)
              .then((data) => data),
          });
        },
      },
    ],
  },
  {
    path: ROUTE_PATH.Auth,
    element: <Auth />,
    children: [
      {
        index: true,
        loader: () => redirect(ROUTE_PATH.Main),
      },
      {
        path: ROUTE_PATH.Login,
        element: <Login />,
      },
      {
        path: ROUTE_PATH.Registration,
        element: <Registration />,
      },
    ],
  },
  {
    path: ROUTE_PATH.Error,
    element: <Error />,
  },
]);

export default router;
