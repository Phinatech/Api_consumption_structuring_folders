import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Homelayout } from "../components";
import { Notfound } from "../utils";
import Errorboundary from "../utils/hoc/Errorboundary";

const Homes = lazy(() => import("../pages/Homes"));
const About = lazy(() => import("../pages/About"));
export const element = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Homes />,
        errorElement: <Errorboundary />,
        hasErrorBoundary: true,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Errorboundary />,
        hasErrorBoundary: true,
      },
    ],
  },

  {
    path: "*",
    element: <Notfound />,
  },
]);
