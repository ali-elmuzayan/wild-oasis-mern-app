import { HiBars3BottomLeft, HiBars3CenterLeft } from "react-icons/hi2";
import Logo from "../../components/common/Logo";
import MainNavbar from "./MainNavbar";

type SidebarProps = {
  className?: string;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
};

const Sidebar = ({
  className = "",
  isCollapsed,
  onToggleCollapse,
}: SidebarProps) => {
  return (
    <aside
      className={`${className} border-r border-gray-200 bg-stone-50 px-4 py-6 transition-all duration-300`}
    >
      <div className="sticky top-6 flex h-[calc(100vh-3rem)] flex-col rounded-[2rem] border border-white/70 bg-gradient-to-b from-white via-white to-stone-100 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        <div
          className={`flex ${
            isCollapsed
              ? "flex-col items-center gap-3"
              : "items-center justify-between"
          }`}
        >
          <Logo isCollapsed={isCollapsed} />
          <button
            type="button"
            onClick={onToggleCollapse}
            className={`flex items-center justify-center rounded-2xl border border-stone-200 bg-white text-gray-500 transition-all duration-300 hover:border-gray-300 hover:bg-gray-900 hover:text-white ${
              isCollapsed ? "h-12 w-12" : "p-3"
            }`}
            aria-label={
              isCollapsed
                ? "Expand sidebar navigation"
                : "Collapse sidebar navigation"
            }
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <HiBars3BottomLeft size={20} />
            ) : (
              <HiBars3CenterLeft size={20} />
            )}
          </button>
        </div>

        <div className={`flex-1 ${isCollapsed ? "py-4" : "py-6"}`}>
          <MainNavbar isCollapsed={isCollapsed} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
