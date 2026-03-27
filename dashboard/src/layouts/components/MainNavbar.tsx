import { HiOutlineHome } from "react-icons/hi";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineChevronRight,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { NavLink } from "react-router";

const MainNavbarDate = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <HiOutlineHome size={24} />,
  },
  {
    title: "Cabins",
    path: "/dashboard/cabins",
    icon: <HiOutlineCalendarDays size={24} />,
  },
  {
    title: "Bookings",
    path: "/dashboard/bookings",
    icon: <HiOutlineHomeModern size={24} />,
  },
  {
    title: "Users",
    path: "/dashboard/users",
    icon: <HiOutlineUsers size={24} />,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: <HiOutlineCog6Tooth size={24} />,
  },
];

const MainNavbar = ({ isCollapsed = false }: { isCollapsed?: boolean }) => {
  return (
    <nav>
      <ul className="flex flex-col items-stretch gap-3">
        {MainNavbarDate.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                `group flex items-center rounded-2xl border text-lg font-semibold transition-all duration-300 ${
                  isCollapsed ? "justify-center px-2 py-3" : "gap-3 px-4 py-3"
                } ${
                  isActive
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700 shadow-sm"
                    : "border-transparent text-gray-600 hover:border-gray-200 hover:bg-white hover:text-gray-900 hover:shadow-sm"
                }`
              }
              aria-label={isCollapsed ? item.title : undefined}
              title={isCollapsed ? item.title : undefined}
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`rounded-xl p-2 transition-colors duration-300 ${
                      isActive
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-100 text-gray-500 group-hover:bg-gray-900 group-hover:text-white"
                    }`}
                  >
                    {item.icon}
                  </span>
                  {!isCollapsed && <span className="flex-1">{item.title}</span>}
                  {!isCollapsed && (
                    <HiOutlineChevronRight
                      className={`transition-all duration-300 ${
                        isActive
                          ? "text-emerald-500"
                          : "text-gray-300 group-hover:translate-x-1 group-hover:text-gray-500"
                      }`}
                    />
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavbar;
