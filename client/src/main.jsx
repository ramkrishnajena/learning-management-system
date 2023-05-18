import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Course from "./pages/Course.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import EnrolledCourse from "./pages/EnrolledCourse.jsx";
import Home from "./component/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Error from "./pages/Error.jsx";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "singnup",
        element: <Signup />,
      },
      {
        path: "course",
        element: <Course />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "my-course",
            element: <EnrolledCourse />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={MainRouter} />
);
