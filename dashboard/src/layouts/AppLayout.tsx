import { Outlet } from "react-router";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const AppLayout = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-[26rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar className="row-span-full" />
      <main className="py-24 px-40 row-span-2 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
