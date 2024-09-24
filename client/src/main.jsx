import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from './App';
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ErrorPage from "./Pages/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
