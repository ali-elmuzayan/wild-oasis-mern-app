import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const AppLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div
      className={`min-h-screen w-full grid grid-rows-[auto_1fr] bg-stone-100 text-gray-800 transition-[grid-template-columns] duration-300 ${
        isSidebarCollapsed ? "grid-cols-[7rem_1fr]" : "grid-cols-[26rem_1fr]"
      }`}
    >
      <Header />
      <Sidebar
        className="row-span-full"
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() =>
          setIsSidebarCollapsed((isCollapsed) => !isCollapsed)
        }
      />
      <main className="row-span-2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.72),_transparent_40%),linear-gradient(180deg,_#f7f3ee_0%,_#f1ebe4_100%)] px-10 py-10">
        <div className="min-h-full rounded-[2rem] border border-white/70 bg-white/55 p-14 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-sm">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
