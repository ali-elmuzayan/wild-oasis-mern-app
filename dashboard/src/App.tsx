import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Cabins from "./pages/cabins/Cabins";
import Bookings from "./pages/bookings/Bookings";
import Users from "./pages/users/Users";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

// React query;
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
