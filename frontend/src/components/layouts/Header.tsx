import Logo from "@/components/layouts/Logo";
import Navbar from "@/components/layouts/Navbar";

const Header = () => {
  return (
    <header className=" border-b border-primary-900 px-8 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
