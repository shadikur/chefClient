import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./layout/LandingPage";
import Home from "./pages/home/Home";
import StandardPages from "./layout/StandardPages";
import Contact from "./pages/contact/Contact.jsx";
import Login from "./pages/login/Login.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Register from "./pages/register/register.jsx";
import AuthProvider from "./provider/AuthProvider";
import Chefs from "./pages/chefs/Chefs";
import Error from "./pages/error/Error";
import ChefsProfile from "./pages/chefsprofile/ChefsProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/pages",
    element: <StandardPages></StandardPages>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/pages/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/pages/chefs",
        element: <Chefs></Chefs>,
      },
      {
        path: "/pages/chefsprofile/:id",
        element: <ChefsProfile></ChefsProfile>,
        loader: ({ params }) =>
          fetch(`https://chef-server-sigma.vercel.app/chef/${params.id}`),
      },
      {
        path: "/pages/login",
        element: <Login></Login>,
      },
      {
        path: "/pages/register",
        element: <Register></Register>,
      },
      {
        path: "/pages/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
