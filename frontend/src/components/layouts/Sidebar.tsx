import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex col border-r border-primary-900 bg-red-800">
      <ul>
        <li>
          <Link href="/account">Account</Link>
        </li>
        <li>
          <Link href="/account/bookings">Bookings</Link>
        </li>
        <li>
          <Link href="/account/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
