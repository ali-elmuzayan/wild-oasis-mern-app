import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Cabins from "./pages/cabins/Cabins";
import Bookings from "./pages/bookings/Bookings";
import Users from "./pages/users/Users";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";

const router = createBrowserRouter([
  // temporary navigate to dashboard when "/"
  { path: "/", element: <Navigate to="/dashboard" replace /> },
  {
    path: "/dashboard",
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "cabins", element: <Cabins /> },
      { path: "bookings", element: <Bookings /> },
      { path: "users", element: <Users /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
