import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages/Home";
import HelloWorld from "@/pages/HelloWorld";
import { Counter } from "@/pages/Counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hello",
    element: <HelloWorld />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
