import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./layout/LandingPage";
import Home from "./pages/home/Home";
import StandardPages from "./layout/StandardPages";
import Contact from "./pages/contact/Contact.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
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
    children: [
      {
        path: "/pages/blog",
        element: <p>TEST</p>,
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
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
