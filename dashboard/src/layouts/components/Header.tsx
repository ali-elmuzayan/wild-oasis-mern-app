const Header = ({ className = "" }: { className?: string }) => {
  return (
    <header
      className={`${className} border-b border-stone-200/80 bg-[linear-gradient(180deg,_rgba(255,255,255,0.88),_rgba(248,245,240,0.92))] px-10 py-6 backdrop-blur-sm`}
    >
      <div className="flex items-center justify-between rounded-[2rem] border border-white/70 bg-white/60 px-8 py-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
            Wild Oasis
          </p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-gray-800">
            Operations Dashboard
          </h1>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-3 text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
            Workspace Status
          </p>
          <p className="mt-1 text-sm font-medium text-gray-600">
            Calm, organized, and ready for today&apos;s guests
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
