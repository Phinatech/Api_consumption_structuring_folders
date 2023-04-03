import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Homelayout } from "../components";
import Homes from "../pages/Homes";
import { Notfound } from "../utils";
import Errorboundary from "../utils/hoc/Errorboundary";

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
    ],
  },

  {
    path: "*",
    element: <Notfound />,
  },
]);
