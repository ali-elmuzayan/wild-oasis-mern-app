import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/assets/image/logo.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        quality={80}
        width="40"
        height="40"
        alt="the wild oasis logo"
      />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
};

export default Logo;
