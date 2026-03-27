import { Link } from "react-router";

const Logo = () => {
  return (
    <Link
      to="/dashboard"
      className="text-2xl font-bold text-center text-gray-600 hover:bg-gray-50 hover:text-gray-800 hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      Wild Oasis
    </Link>
  );
};

export default Logo;
