import { createBrowserRouter, RouterProvider } from "react-router";
import { useNavigate } from "react-router-dom";
import Login from "../components/Sign/Login/Login.component";
import Register from "../components/Sign/Register/Register.component";
import Homecomponent from "../components/Home/Home.component";
import { useEffect } from "react";

const rutas = createBrowserRouter([
  {
    path: "/",
    element: <Homecomponent />,
  },
  {
    path: "/sign",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

function Routes() {
  return (
    <>
      <RouterProvider router={rutas} />
    </>
  );
}

export default Routes;
