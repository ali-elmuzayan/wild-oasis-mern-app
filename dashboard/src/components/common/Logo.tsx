import { Link } from "react-router";

const Logo = ({ isCollapsed = false }: { isCollapsed?: boolean }) => {
  return (
    <Link
      to="/dashboard"
      className={` group inline-flex rounded-3xl px-3 py-2 text-left transition-transform duration-300 hover:-translate-y-0.5 ${
        isCollapsed ? "justify-center" : "items-center gap-4"
      }`}
      aria-label="Wild Oasis dashboard home"
      title={isCollapsed ? "Wild Oasis" : undefined}
    >
      {/* <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gray-900 text-white shadow-[0_14px_30px_rgba(17,24,39,0.18)] transition-transform duration-300 group-hover:scale-105">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(110,231,183,0.9),_transparent_55%)] opacity-90" />
        <span className="absolute inset-x-3 bottom-3 h-px bg-white/30" />
        <span className="relative text-lg font-black tracking-[0.28em]">
          WO
        </span>
      </span> */}

      {!isCollapsed && (
        <span className="flex flex-col">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-emerald-600">
            Resort Admin
          </span>
          <span className="text-2xl font-black leading-none tracking-tight text-gray-800 transition-colors duration-300 group-hover:text-gray-950">
            Wild Oasis
          </span>
        </span>
      )}
    </Link>
  );
};

export default Logo;
