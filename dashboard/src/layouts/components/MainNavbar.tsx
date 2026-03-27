import { HiOutlineHome } from "react-icons/hi";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
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

const MainNavbar = () => {
  return (
    <nav>
      <ul className="flex flex-col items-stretch gap-2">
        {MainNavbarDate.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className="text-2xl font-medium  flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 hover:translate-x-1 transition-colors duration-300"
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavbar;
