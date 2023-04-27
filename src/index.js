//Library Imports
import React from 'react';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//Component Imports
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Faq from "./Pages/Faq.js";
import Portfolio from "./Pages/Portfolio.js";
import Contact from "./Pages/Contact.js";

const router = createBrowserRouter([
  {
    path: "/professional-portfolio/",
    element: <Home />,
  },
  {
    path: "/professional-portfolio/about",
    element: <About />,
  },
  {
    path: "/professional-portfolio/faq",
    element: <Faq />,
  },
  {
    path: "/professional-portfolio/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/professional-portfolio/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
