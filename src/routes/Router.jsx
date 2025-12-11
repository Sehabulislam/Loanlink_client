import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import AllLoans from "../pages/Loans/AllLoans";
import ApplyLoan from "../pages/Loans/ApplyLoan";
import MyLoans from "../pages/Dashboard/User/MyLoans";
import LoanDetails from "../pages/Loans/LoanDetails";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Error404 from "../components/Error404";
import Spinner from "../components/Spinner";

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
      //   {
      //     path: "/applyLoan",
      //     element: (
      //       <PrivateRoute>
      //         <ApplyLoan></ApplyLoan>
      //       </PrivateRoute>
      //     ),
      //   },
      {
        path: "/loanDetails/:id",
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/loans/${params.id}`
          ),
        element: <LoanDetails></LoanDetails>,
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
    path: "*",
    element: <Error404></Error404>,
  },
]);
