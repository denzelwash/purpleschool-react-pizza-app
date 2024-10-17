import { createBrowserRouter } from "react-router-dom";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";
import Product from "./pages/Product/Product";
import Sidebar from "./layouts/Sidebar/Sidebar";
import axios from "axios";
import { Product as ProductType } from "./types/product";
import { API_URL } from "./const";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        index: true,
        element: <Menu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <Product />,
        errorElement: <>Error</>,
        loader: async ({ params }) => {
          const { data } = await axios.get<ProductType[]>(
            `${API_URL}/products/${params.id}`
          );
          return data;
        },
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
