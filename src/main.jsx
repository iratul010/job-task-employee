import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import EmployeeTable from "./Pages/EmployeeTable/EmployeeTable";
import Hiring from "./Components/Hiring/Hiring";
import Report from "./Components/Report/Report";
import Files from "./Components/Files/Files";
import Payroll from "./Components/Payroll/Payroll";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/employee",
        element: <EmployeeTable />,
      },
      {
        path: "/hiring",
        element: <Hiring />,
      },
      {
        path: "/report",
        element: <Report />,
      },
      {
        path: "/files",
        element: <Files />,
      },
      {
        path: "/payroll",
        element: <Payroll />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
