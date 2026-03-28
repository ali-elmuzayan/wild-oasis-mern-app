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
import { Toaster } from "react-hot-toast";

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
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              backgroundColor: "#10b981",
              color: "#fff",
              maxWidth: "500px",
              padding: "16px 24px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(16, 185, 129, 0.25)",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#10b981",
            },
          },
          error: {
            duration: 5000,
            style: {
              backgroundColor: "#ef4444",
              color: "#fff",
              maxWidth: "500px",
              padding: "16px 24px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(239, 68, 68, 0.25)",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#ef4444",
            },
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
