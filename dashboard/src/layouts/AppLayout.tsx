import { Outlet } from "react-router";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const AppLayout = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-[26rem_1fr] grid-rows-[auto_1fr] text-gray-800">
      <Header />
      <Sidebar className="row-span-full" />
      <main className="py-16 px-24 row-span-2 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
