import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="min-h-screen w-full">
      <header className="h-12 bg-gray-500">header</header>
      
      <main className="bg-gray-200">
        <Outlet />
      </main>
      <footer className="h-12 bg-gray-500">footer</footer>
    </div>
  );
};

export default AppLayout;
