import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";

import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";

// Check if user is logged in and set the initial path
const token = localStorage.getItem("token");
const initialPath = token ? "/" : "/login";

// Set the initial URL before rendering the app
if (window.location.pathname === "/") {
  window.history.replaceState({}, "", initialPath);
}

const router = createBrowserRouter([
  // Public routes
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/:id",
    element: <Home />,
  },

  // Catch-all route for unknown paths
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
