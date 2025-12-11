import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import AllLoans from "../pages/Loans/AllLoans";
import MyLoans from "../pages/Dashboard/User/MyLoans";
import LoanDetails from "../pages/Loans/LoanDetails";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Error404 from "../components/Error404";
import Spinner from "../components/Spinner";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MyProfile from "../pages/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <Spinner></Spinner>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allLoans",
        element: <AllLoans></AllLoans>,
      },
      {
        path: "/loanDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/loans/${params.id}`),
        element: (
          <PrivateRoute>
            <LoanDetails></LoanDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path : '/dashboard',
    element : <DashboardLayout></DashboardLayout>,
    children : [
      {
        path : 'myLoans',
        element : <MyLoans></MyLoans>
      },
      {
        path : 'myProfile',
        element : <MyProfile></MyProfile>,
      }
    ]
  },
  {
    path: "*",
    element: <Error404></Error404>,
  },
]);
