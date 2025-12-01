import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "../components/Sign/Login/Login.component";
import Register from "../components/Sign/Register/Register.component";

const rutas = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
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
