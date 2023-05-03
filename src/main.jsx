import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./layout/LandingPage";
import Home from "./pages/home/Home";
import StandardPages from "./layout/StandardPages";

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
        path: "/pages",
        element: <p>TEST</p>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
