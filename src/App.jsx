import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeNav from "./wrappers/HomeNav";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import UserDashboardNav from "./wrappers/UserDashboardNav";
import authLoader from "./loaders/authLoaders";
import ForgotPassword from "./components/ForgotPassword";
import EnterOtp from "./components/EnterOtp";
import ResetPassword from "./components/ResetPassword";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeNav />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />,
        loader: authLoader
      }
    ]
  },
  {
    path: "dashboard",
    element: <UserDashboardNav />,
    loader: authLoader
  },
  {
    path: "logout",
    element: <Logout />
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
    loader: authLoader
  },
  {
    path: "enter-otp",
    element: <EnterOtp />
  },
  {
    path: "reset-password",
    element: <ResetPassword />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;