import { createBrowserRouter } from "react-router-dom";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";
import Sidebar from "./layouts/Sidebar/Sidebar";

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
