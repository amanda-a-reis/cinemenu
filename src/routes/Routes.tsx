import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HelloWorld from "../pages/HelloWorld";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hello",
    element: <HelloWorld />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
