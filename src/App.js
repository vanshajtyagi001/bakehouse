import React from 'react'
import Home from "./pages/home/Home.jsx"
import About from "./pages/about/About.jsx"
import Service from "./pages/service/Service.jsx"
import Login from "./pages/login/Login.jsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "service",
    element: <Service/>,
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
