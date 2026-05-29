import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import ShoppingBag from "./Components/Shopping/ShoppingBag";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/order",
      element: <ShoppingBag />,
    },
  ],
  {
    basename: "/E-Commerce-Web-Application/",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;