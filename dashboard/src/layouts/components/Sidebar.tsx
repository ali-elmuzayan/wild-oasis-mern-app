import Logo from "../../components/common/Logo";
import MainNavbar from "./MainNavbar";

const Sidebar = ({ className = "" }: { className?: string }) => {
  return (
    <aside
      className={`${className} border-r border-gray-200 py-12 px-8 space-y-12`}
    >
      <div className="flex items-center justify-center ">
        <Logo />
      </div>
      <MainNavbar />
    </aside>
  );
};

export default Sidebar;
